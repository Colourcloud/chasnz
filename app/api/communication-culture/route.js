import { NextResponse } from 'next/server';

export async function POST(request) {
  const body = await request.json();
  console.log('Received body:', body);

  const portalId = "40083784";
  const formId = "c400e12b-be98-4077-9667-eeab214b7081"; // Hardcoding the form ID for this specific event

  const hubspotEndpoint = `https://forms.hubspot.com/uploads/form/v2/${portalId}/${formId}`;

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

  // Add event specific properties
  formData.append('event_type', 'communication-and-culture');
  formData.append('location', 'Auckland');
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
    return NextResponse.json({ message: 'Form submitted successfully' }, { status: 200 });

  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ message: 'Server error', error: error.message }, { status: 500 });
  }
}
