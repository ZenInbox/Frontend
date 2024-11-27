// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import Mailgun from 'mailgun.js';
import FormData from 'form-data';
import MailGen from 'mailgen';

const API_KEY = 'ca89003d5b854013c33c392ae4d82f87-6df690bb-8d197859';
const DOMAIN = 'sandbox46880521a7b24e859f672952141a7190.mailgun.org';

const mailgen = new MailGen({
    theme: 'default',
    product: {
        name: 'Rishi',
        link: 'https://rishibhattasali.vercel.app',
    },
});

const mailgun = new Mailgun(FormData).client({
    username: 'api',
    key: API_KEY,
});

type Data = {
    success: boolean;
};

type EventData = {
    items: Array<{
        event: string;
        recipient: string;
        timestamp: number;
    }>;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'GET') {
        const { recipient } = req.query; // Pass the recipient email as a query parameter.

        try {
            console.log('Fetching email events...');
            const response: EventData = await mailgun.events.get(DOMAIN, {
                recipient: recipient as string, // Track events for a specific email.
            });

            res.status(200).json({ success: true, events: response.items });
        } catch (e: any) {
            console.error('Error fetching events:', e.message || e);
            res.status(500).json({ success: false, error: e.message || e });
        }
        return;
    }

    if (req.method === 'POST') {
        const body = req.body || {};
        const intro = body.intro || '';
        const content = body.content || '';
        const email = {
            body: {
                name: body.name || 'Customer',
                intro,
                outro: content,
            },
        };

        try {
            console.log('Sending email...');
            const response = await mailgun.messages.create(DOMAIN, {
                to: 'pretishasahoo@gmail.com',
                from: 'rishibhattasali@gmail.com',
                subject: body.subject || 'Test Email',
                text: mailgen.generatePlaintext(email),
                html: mailgen.generate(email),
            });
            console.log('Mailgun response:', response);
            res.status(200).json({ success: true });
        } catch (e: any) {
            console.error('Mailgun error:', e.message || e);
            res.status(500).json({ success: false });
        }
        return;
    }

    // If the method is not GET or POST, return 404
    res.status(404).json({ success: false });
}
