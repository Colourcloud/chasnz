import { NextResponse } from 'next/server';

export async function POST(request) {
  const body = await request.json();
  console.log('Received assessment consent form data:', body);

  const portalId = "40083784";
  const formId = "ae9c5caf-38e4-4d7d-a462-90fcbf34a865";

  const hubspotEndpoint = `https://forms.hubspot.com/uploads/form/v2/${portalId}/${formId}`;

  // Prepare the form data for HubSpot
  const formData = new URLSearchParams();
  
  // Map the form fields to HubSpot fields
  if (body.firstName) formData.append('firstname', body.firstName);
  if (body.lastName) formData.append('lastname', body.lastName);
  if (body.email) formData.append('email', body.email);
  if (body.company) formData.append('company', body.company);
  if (body.company_size) formData.append('company_size', body.company_size);

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
    return NextResponse.json({ message: 'Form submitted successfully' }, { status: 200 });

  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ message: 'Server error', error: error.message }, { status: 500 });
  }
} 