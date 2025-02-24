import nodemailer from "nodemailer";

const createTaskEmailTemplate = (email, task) => {
    return `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Feedback</title>
            <style>
                .container { max-width: 600px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif; }
                .header { background-color: #4CAF50; padding: 20px; text-align: center; border-radius: 5px; color: white; }
                .content { background-color: #ffffff; border: 1px solid #e0e0e0; border-radius: 5px; padding: 20px; margin-top: 20px; }
                .footer { text-align: center; color: #6c757d; font-size: 12px; margin-top: 20px; }
                .task { font-size: 16px; font-weight: bold; color: #333; }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h2>Feedback</h2>
                </div>
                <div class="content">
                    <p><strong>From:</strong> ${email}</p>
                    <p><strong>Task Details:</strong></p>
                    <p class="task">${task}</p>
                </div>
                <div class="footer">
                    <p>© 2024 Skyline Solutions. All rights reserved.</p>
                </div>
            </div>
        </body>
        </html>
    `;
};

const createServiceRequestTemplate = (data) => {
    const { name, email, company, service, message } = data;
    return `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>New Service Request</title>
            <style>
                .container {
                    max-width: 600px;
                    margin: 0 auto;
                    padding: 20px;
                    font-family: Arial, sans-serif;
                    background-color: #f8fafc;
                }
                .header {
                    background: linear-gradient(135deg, #2563eb, #4f46e5);
                    padding: 25px;
                    text-align: center;
                    border-radius: 10px 10px 0 0;
                }
                .header h2 {
                    color: white;
                    margin: 0;
                    font-size: 24px;
                }
                .content {
                    background-color: #ffffff;
                    border: 1px solid #e5e7eb;
                    border-radius: 0 0 10px 10px;
                    padding: 30px;
                    margin-bottom: 20px;
                    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
                }
                .field {
                    margin-bottom: 20px;
                }
                .field-label {
                    font-weight: 600;
                    color: #374151;
                    font-size: 14px;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                    margin-bottom: 5px;
                }
                .field-value {
                    color: #1f2937;
                    font-size: 16px;
                    line-height: 1.5;
                    background-color: #f9fafb;
                    padding: 12px;
                    border-radius: 6px;
                    border: 1px solid #e5e7eb;
                }
                .message-box {
                    margin-top: 25px;
                    padding: 20px;
                    background-color: #f9fafb;
                    border-radius: 8px;
                    border: 1px solid #e5e7eb;
                }
                .footer {
                    text-align: center;
                    color: #6b7280;
                    font-size: 12px;
                    margin-top: 20px;
                }
                .highlight {
                    color: #2563eb;
                    font-weight: 600;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h2>New Service Request</h2>
                </div>
                <div class="content">
                    <div class="field">
                        <div class="field-label">Service Type</div>
                        <div class="field-value highlight">${service}</div>
                    </div>
                    <div class="field">
                        <div class="field-label">Client Information</div>
                        <div class="field-value">
                            <strong>Name:</strong> ${name}<br>
                            <strong>Email:</strong> ${email}<br>
                            ${company ? `<strong>Company:</strong> ${company}` : ''}
                        </div>
                    </div>
                    <div class="field">
                        <div class="field-label">Project Details</div>
                        <div class="message-box">
                            ${message.replace(/\n/g, '<br>')}
                        </div>
                    </div>
                </div>
                <div class="footer">
                    <p>© ${new Date().getFullYear()} Skyline Solutions. All rights reserved.</p>
                    <p>This email was sent automatically in response to a service request.</p>
                </div>
            </div>
        </body>
        </html>
    `;
};

// Update the sendTaskEmail function
export const sendTaskEmail = async (data) => {
    const { name, email, company, service, message } = data;

    return await transport.sendMail({
        from: email,
        to: "skylinesolution0001@gmail.com",
        subject: `New Service Request: ${service}`,
        html: createServiceRequestTemplate(data)
    });
};



const transport = nodemailer.createTransport({
    service: "gmail",
    port: 465,
    secure: true,
    auth: {
        user: "skylinesolution0001@gmail.com",
        pass: "xyrzvqmbtjxkdfwq"
    }
});

export const sendEmail = async (data) => {
    const { sender, subject, task } = data;

    return await transport.sendMail({
        from: sender,
        to: "skylinesolution0001@gmail.com",
        subject,
        html: createTaskEmailTemplate(sender, task),
    });
};


