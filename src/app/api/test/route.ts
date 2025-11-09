import {NextResponse} from "next/server";

export const GET = async (request: Request) => {
    return new NextResponse('Test API is working', { status: 200 });
}