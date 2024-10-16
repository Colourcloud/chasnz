import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

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

    const workshopSlug = `energy-safety-${location.toLowerCase()}`;
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

    // // Send confirmation email
    // const transporter = nodemailer.createTransport({
    //   service: 'gmail',
    //   auth: {
    //     user: process.env.GMAIL_USER,
    //     pass: process.env.GMAIL_PASS,
    //   },
    // });

    // const mailOptions = {
    //   from: `"CHASNZ Event Booking" <${process.env.GMAIL_USER}>`, // Modified this line
    //   to: body.fields.email,
    //   subject: 'Your Event Reservation is Confirmed',
    //   html: `
    //     <!DOCTYPE html>
    //     <html lang="en">
    //     <head>
    //         <meta charset="UTF-8">
    //         <meta name="viewport" content="width=device-width, initial-scale=1.0">
    //         <title>Your Event Reservation is Confirmed</title>
    //     </head>
    //     <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #ffffff; margin: 0; padding: 0;">
    //         <table cellpadding="0" cellspacing="0" style="width: 100%; max-width: 600px; margin: 0 auto; background-color: #ffffff;">
    //             <tr>
    //                 <td style="padding: 40px 20px;">
    //                     <table cellpadding="0" cellspacing="0" style="width: 100%;">
    //                         <tr>
    //                             <td style="text-align: center; padding-bottom: 24px;">
    //                                 <img src="https://www.chasnz.org/logo-green.svg" alt="Apple Logo" style="width: 250px; height: 52px;">
    //                             </td>
    //                         </tr>
    //                         <tr>
    //                             <td style="text-align: center; padding-bottom: 24px;">
    //                                 <img src="https://www.chasnz.org/events/energy-safety/form-header.jpg" alt="Apple Logo" style="width: 100%; height: 150px; border-radius: 8px;">
    //                             </td>
    //                         </tr>
    //                         <tr>
    //                             <td style="text-align: center; padding-bottom: 30px;">
    //                                 <h2 style="font-size: 18px; font-weight: 600; color: #1d1d1f; margin-bottom: 10px;">Dear ${body.fields.firstname} ${body.fields.lastname}</h1>
    //                                 <h1 style="font-size: 32px; font-weight: 600; color: #1d1d1f; margin-bottom: 10px;">Your registration for the workshop in ${location} has been confirmed!</h1>
    //                                 <p style="font-size: 17px; line-height: 25px; color: #86868b; margin: 0;">We look forward to seeing you at the event.</p>
    //                             </td>
    //                         </tr>
    //                         <tr>
    //                             <td style="background-color: #f5f5f7; border-radius: 12px; padding: 30px; margin-bottom: 30px;">
    //                                 <table cellpadding="0" cellspacing="0" style="width: 100%;">
    //                                     <tr>
    //                                       <td style="padding-bottom: 20px;">
    //                                         <h2 style="font-size: 18px; line-height: 25px; color: #1d1d1f; margin: 0; font-weight: 600;">Event Details</h2>
    //                                       </td>
    //                                    </tr>
    //                                     <tr>
    //                                         <td style="padding-bottom: 24px;">
    //                                             <p style="font-size: 24px; line-height: 25px; color: #1d1d1f; margin: 0; font-weight: 600;">Energy Based Safety Workshop</p>
    //                                         </td>
    //                                     </tr>
    //                                     <tr>
    //                                         <td style="padding-bottom: 20px;">
    //                                           <p style="font-size: 17px; line-height: 25px; color: #86868b; margin: 0;">
    //                                                 Date: ${
    //                                                   location === 'Auckland' ? 'Wednesday, 6 November 2024' :
    //                                                   location === 'Wellington' ? 'Thursday, 7 November 2024' :
    //                                                   location === 'Christchurch' ? 'Monday, 4 November 2024' :
    //                                                   workshop.acf.workshop_date
    //                                                 }
    //                                             </p>
    //                                             <p style="font-size: 17px; line-height: 25px; color: #86868b; margin: 12px 0px 0px 0px;">
    //                                                 Time: 8:30 AM - 12:30 PM
    //                                             </p>
    //                                             <p style="font-size: 17px; line-height: 25px; color: #86868b; margin: 12px 0px 0px 0px;">
    //                                                 Location: ${location} <br>
    //                                                 ${workshop.acf.venue_address}
    //                                             </p>
    //                                         </td>
    //                                     </tr>
    //                                     <tr>
    //                                         <td>
    //                                             <p style="font-size: 17px; line-height: 25px; color: #86868b; margin: 0;">
    //                                                 Hosted by:<br>
    //                                                 CHASNZ
    //                                             </p>
    //                                         </td>
    //                                     </tr>
    //                                 </table>
    //                             </td>
    //                         </tr>
                            
    //                         <tr style="margin-top: 30px; display: table;">
    //                             <td style="border-top: 1px solid #d2d2d7; padding-top: 30px;">
    //                                 <p style="font-size: 12px; line-height: 16px; color: #86868b; margin: 0;">
    //                                     If you need to make changes to your reservation or have any questions, please contact us at info@chasnz.org.
    //                                 </p>
    //                             </td>
    //                         </tr>
    //                     </table>
    //                 </td>
    //             </tr>
    //         </table>
    //     </body>
    //     </html>
    //   `,
    // };

    // try {
    //   console.log('Attempting to send email to:', body.fields.email);
    //   const info = await transporter.sendMail(mailOptions);
    //   console.log('Email sent successfully. Message ID:', info.messageId);
    //   console.log('Preview URL:', nodemailer.getTestMessageUrl(info));
    // } catch (emailError) {
    //   console.error('Error sending confirmation email:', emailError);
    // }

    return NextResponse.json({ 
      message: 'Form submitted successfully, seats updated, and confirmation email sent',
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