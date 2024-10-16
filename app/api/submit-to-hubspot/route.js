import { NextResponse } from 'next/server';

export async function POST(request) {
  const body = await request.json();
  console.log('Received body:', body);

  const portalId = "40083784";

  if (!body.formId) {
    return NextResponse.json({ message: 'Form ID is missing' }, { status: 400 });
  }

  const hubspotEndpoint = `https://forms.hubspot.com/uploads/form/v2/${portalId}/${body.formId}`;

  // Prepare the form data for HubSpot
  const formData = new URLSearchParams();
  for (const [key, value] of Object.entries(body.fields || {})) {
    formData.append(key, value);
  }

  // Add context data
  if (body.context) {
    formData.append('hutk', body.context.hutk || '');
    formData.append('hs_context', JSON.stringify({
      pageUri: body.context.pageUri || '',
      pageName: body.context.pageName || '',
    }));
  }

  // Add "Conversion page" property
  formData.append('Conversion page', body.context?.pageUri || '');

  console.log('Form data being sent to HubSpot:', formData.toString());

  try {
    // Send the request to HubSpot API
    const hubspotResponse = await fetch(hubspotEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData.toString(),
    });

    if (!hubspotResponse.ok) {
      const errorText = await hubspotResponse.text();
      console.error('HubSpot Error:', errorText);
      return NextResponse.json({ message: 'Error submitting to HubSpot', error: errorText }, { status: 500 });
    }

    console.log('HubSpot submission successful');

    // If HubSpot submission is successful, update the seats_remaining in WordPress
    const location = body.fields?.location;
    console.log('Location from form:', location);

    if (!location) {
      return NextResponse.json({ message: 'Location is missing from form submission' }, { status: 400 });
    }

    // Extract the city name from the location
    const city = location.split('-').pop();
    const workshopSlug = `energy-safety-${city}`;
    console.log('Workshop slug:', workshopSlug);

    // Fetch the specific workshop by slug
    const workshopResponse = await fetch(`https://cms.chasnz.org/wp-json/wp/v2/workshop?slug=${workshopSlug}`, {
      headers: {
        'Authorization': `Basic ${Buffer.from(`${process.env.WP_USERNAME}:${process.env.WP_APP_PASSWORD}`).toString('base64')}`,
      },
    });

    if (!workshopResponse.ok) {
      const errorText = await workshopResponse.text();
      console.error('Error fetching workshop:', errorText);
      return NextResponse.json({ message: 'Error fetching workshop data', error: errorText }, { status: 500 });
    }

    const workshops = await workshopResponse.json();
    console.log('Fetched workshops:', workshops);

    if (workshops.length === 0) {
      return NextResponse.json({ message: 'Workshop not found', slug: workshopSlug }, { status: 404 });
    }

    const workshop = workshops[0];
    const currentSeats = workshop.acf.seats_remaining;
    const newSeatsRemaining = Math.max(currentSeats - 1, 0); // Ensure we don't go below 0

    // Update the workshop with the new seats_remaining value
    const updateResponse = await fetch(`https://cms.chasnz.org/wp-json/wp/v2/workshop/${workshop.id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${Buffer.from(`${process.env.WP_USERNAME}:${process.env.WP_APP_PASSWORD}`).toString('base64')}`,
      },
      body: JSON.stringify({
        acf: {
          seats_remaining: newSeatsRemaining,
        },
      }),
    });

    if (!updateResponse.ok) {
      const errorText = await updateResponse.text();
      console.error('Error updating workshop:', errorText);
      return NextResponse.json({ message: 'Error updating seats remaining', error: errorText }, { status: 500 });
    }

    const updateResponseData = await updateResponse.json();
    console.log('WordPress update response:', updateResponseData);

    return NextResponse.json({ 
      message: 'Form submitted successfully and seats updated',
      oldSeats: currentSeats,
      newSeats: newSeatsRemaining,
      workshopId: workshop.id,
      workshopSlug: workshopSlug
    }, { status: 200 });

  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ message: 'Server error', error: error.message }, { status: 500 });
  }
}