import { NextResponse } from 'next/server';

export async function POST(request) {
  const body = await request.json();

  // Replace with your actual HubSpot portal ID
  const portalId = "40083784";
  
  // The endpoint for embedded forms is different
  const hubspotEndpoint = `https://forms.hubspot.com/uploads/form/v2/${portalId}/${body.formId}`;

  // Prepare the form data
  const formData = new URLSearchParams();
  for (const [key, value] of Object.entries(body.fields)) {
    formData.append(key, value);
  }

  // Add the context data
  formData.append('hutk', body.hutk || '');
  formData.append('pageUri', `${process.env.NEXT_PUBLIC_SITE_URL}${body.path || '/'}`);
  formData.append('pageName', 'Events Page Submissions');

  try {
    const hubspotResponse = await fetch(hubspotEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData.toString(),
    });

    if (hubspotResponse.ok) {
      return NextResponse.json({ message: 'Form submitted successfully' }, { status: 200 });
    } else {
      const errorText = await hubspotResponse.text();
      console.error('HubSpot Error:', errorText);
      return NextResponse.json({ message: 'Error submitting to HubSpot', error: errorText }, { status: 500 });
    }
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }
}