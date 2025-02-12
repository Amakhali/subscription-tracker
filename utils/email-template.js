export const emailTemplate =(userName, subscriptionName, expiryDate)=> {
    return `
        <html>
            <head>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        background-color: #f4f4f4;
                        color: #333;
                        padding: 20px;
                    }
                    .container {
                        background-color: #fff;
                        padding: 20px;
                        border-radius: 5px;
                        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                    }
                    h1 {
                        color: #007BFF;
                    }
                    p {
                        line-height: 1.6;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <h1>Subscription Reminder</h1>
                    <p>Dear ${userName},</p>
                    <p>This is a reminder that your subscription to ${subscriptionName} is set to expire on ${expiryDate}.</p>
                    <p>Please renew your subscription to continue enjoying our services.</p>
                    <p>Thank you,</p>
                    <p>The Subscription Tracker Team</p>
                </div>
            </body>
        </html>
    `;
}

