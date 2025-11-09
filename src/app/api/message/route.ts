import {NextResponse} from "next/server";

export const POST = async (request: Request) => {
    try {
        const data = await request.json();

        const response = await fetch('http://185.69.152.124:3008/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        const respData = await response.json();
        return NextResponse.json(respData);
    } catch(e) {
        console.error('Message API error:', e);
        return new Response('Error', { status: 500 });
    }

}