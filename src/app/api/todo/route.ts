import { db } from '@vercel/postgres';
import { NextApiRequest, NextApiResponse } from 'next';
import { NextRequest, NextResponse } from 'next/server';


export function GET(request: NextRequest) {
    return NextResponse.json({message: "You called this api"})
}
