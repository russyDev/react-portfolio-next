import {NextResponse} from "next/server";

export const POST = async (request: Request) => {
    try {
        const data = await request.json();

        console.log('Forwarding message data:', data);

        return NextResponse.json({});
    } catch(e) {
        console.error('Message API error:', e);
        return new Response('Error', { status: 500 });
    }

}