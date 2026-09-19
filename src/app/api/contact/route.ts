import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    let body;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json(
        { error: "Invalid JSON format in request payload." },
        { status: 400 }
      );
    }
    const { name, email, role, notes } = body || {};

    // Validate required inputs
    if (!name || typeof name !== "string" || !name.trim()) {
      return NextResponse.json(
        { error: "Please provide your full name." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !email.trim()) {
      return NextResponse.json(
        { error: "Please provide your email address or WhatsApp contact." },
        { status: 400 }
      );
    }

    const cleanName = name.trim();
    const cleanEmail = email.trim();
    const cleanRole = (role && typeof role === "string" ? role.trim() : "General Contributor / Volunteer");
    const cleanNotes = (notes && typeof notes === "string" ? notes.trim() : "");

    const apiKey = process.env.RESEND_API_KEY;

    // Default recipients: Lead and Co-Lead
    const defaultRecipients = [
      "aizazahmed44@gmail.com",
      "osamakhan.professional@gmail.com",
    ];

    const recipientList = process.env.CONTACT_NOTIFICATION_EMAIL
      ? process.env.CONTACT_NOTIFICATION_EMAIL.split(",").map((e) => e.trim()).filter(Boolean)
      : defaultRecipients;

    // Sender configuration (defaults to Resend testing domain if custom domain is not set yet)
    const senderEmail = process.env.RESEND_FROM_EMAIL || "UpFlex Applications <onboarding@resend.dev>";

    // If no API key configured yet (e.g. initial dev environment), log and respond gracefully
    if (!apiKey) {
      console.warn(
        `[UpFlex Resend Development Mode] RESEND_API_KEY is not defined in environment variables.\nSimulating application submission for ${cleanName} (${cleanEmail}) for role: ${cleanRole}.`
      );
      return NextResponse.json({
        success: true,
        mocked: true,
        message: "Application received in development simulation mode. Set RESEND_API_KEY to send live emails.",
      });
    }

    const resend = new Resend(apiKey);

    const emailSubject = `[UpFlex Shaper Application] ${cleanName} — ${cleanRole}`;

    const emailHtml = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="utf-8">
          <title>${emailSubject}</title>
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #FAF7F2; margin: 0; padding: 24px; color: #211E1B; }
            .container { max-width: 600px; margin: 0 auto; background: #FFFFFF; border-radius: 16px; border: 1px solid #E8E0D4; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
            .header { background-color: #203a2e; color: #FAF7F2; padding: 24px; text-align: left; border-bottom: 3px solid #C45D3E; }
            .title { font-size: 20px; font-weight: bold; margin: 0 0 6px 0; letter-spacing: -0.5px; }
            .subtitle { font-size: 12px; color: #E07A5F; text-transform: uppercase; letter-spacing: 1px; margin: 0; font-weight: 600; }
            .body { padding: 28px 24px; }
            .field-group { margin-bottom: 20px; }
            .field-label { font-size: 11px; text-transform: uppercase; font-weight: bold; color: #6E675E; letter-spacing: 0.5px; margin-bottom: 4px; }
            .field-value { font-size: 16px; color: #211E1B; font-weight: 600; }
            .role-badge { display: inline-block; background-color: #F7EBE6; color: #C45D3E; padding: 4px 12px; border-radius: 20px; font-size: 13px; font-weight: 600; border: 1px solid #D97757; }
            .notes-box { background-color: #FAF7F2; border-left: 4px solid #C45D3E; padding: 14px 16px; border-radius: 4px 8px 8px 4px; font-size: 14px; line-height: 1.6; color: #36322D; }
            .footer { background-color: #FAF7F2; padding: 16px 24px; text-align: center; border-top: 1px solid #E8E0D4; font-size: 12px; color: #6E675E; }
            .action-hint { font-size: 13px; color: #5B826F; margin-top: 16px; font-style: italic; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <p class="subtitle">Global Shapers Peshawar Hub • UpflexSolutions</p>
              <h1 class="title">New Shaper Application Received</h1>
            </div>
            <div class="body">
              <div class="field-group">
                <div class="field-label">Applicant Name</div>
                <div class="field-value">${cleanName}</div>
              </div>

              <div class="field-group">
                <div class="field-label">Contact (Email / WhatsApp)</div>
                <div class="field-value">
                  <a href="mailto:${cleanEmail}" style="color: #C45D3E; text-decoration: none;">${cleanEmail}</a>
                </div>
              </div>

              <div class="field-group">
                <div class="field-label">Applied Role</div>
                <div class="role-badge">${cleanRole}</div>
              </div>

              <div class="field-group">
                <div class="field-label">Contribution Notes / Background</div>
                <div class="notes-box">
                  ${cleanNotes ? cleanNotes.replace(/\n/g, "<br/>") : "<em>No additional notes provided.</em>"}
                </div>
              </div>

              <p class="action-hint">
                💡 Tip: You can reply directly to this email to contact <strong>${cleanName}</strong> directly at ${cleanEmail}.
              </p>
            </div>
            <div class="footer">
              UpflexSolutions — Circular Economy &amp; Women Empowerment Enterprise<br/>
              Peshawar, Khyber Pakhtunkhwa, Pakistan
            </div>
          </div>
        </body>
      </html>
    `;

    let sendResult = await resend.emails.send({
      from: senderEmail,
      to: recipientList,
      replyTo: cleanEmail,
      subject: emailSubject,
      html: emailHtml,
    });

    // If using the default onboarding@resend.dev domain, Resend restricts recipients to the account owner's email
    if (sendResult.error && sendResult.error.message?.includes("You can only send testing emails to your own email address")) {
      const match = sendResult.error.message.match(/\(([^)]+)\)/);
      const testEmail = match ? match[1] : "anaskhandev728@gmail.com";

      console.warn(`[Resend Test Notice] Re-routing submission email to verified test account (${testEmail})`);

      const testHtml = `
        <div style="background-color: #FFF3CD; color: #856404; padding: 12px; border-radius: 8px; margin-bottom: 16px; font-size: 12px; border: 1px solid #FFEEBA;">
          <strong>Resend Test Mode Notice:</strong> This email was delivered to your verified Resend account (<code>${testEmail}</code>) because the default <code>onboarding@resend.dev</code> sender is in test mode.<br/>
          <strong>Intended Recipients:</strong> ${recipientList.join(", ")}<br/>
          <em>To deliver directly to any recipient, verify your custom domain (e.g. <code>upflexsolutions.org</code>) at <a href="https://resend.com/domains">resend.com/domains</a>.</em>
        </div>
        ${emailHtml}
      `;

      sendResult = await resend.emails.send({
        from: senderEmail,
        to: testEmail,
        replyTo: cleanEmail,
        subject: emailSubject,
        html: testHtml,
      });
    }

    if (sendResult.error) {
      console.error("[UpFlex Resend Error]", sendResult.error);
      return NextResponse.json(
        { error: sendResult.error.message || "Failed to send email notification." },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      id: sendResult.data?.id,
      message: "Application email sent successfully to the site leadership.",
    });
  } catch (err: unknown) {
    console.error("[UpFlex API Error]", err);
    const message = err instanceof Error ? err.message : "Internal Server Error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
