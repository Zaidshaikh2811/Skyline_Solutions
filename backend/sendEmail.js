import nodemailer from "nodemailer";

const createTaskEmailTemplate = (email, task) => {
    return `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>New Task Request</title>
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
                    <h2>New Task Request</h2>
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
    console.log(sender, subject, task);

    return await transport.sendMail({
        from: sender,
        to: "skylinesolution001@gmail.com",
        subject,
        html: createTaskEmailTemplate(sender, task),
    });
};