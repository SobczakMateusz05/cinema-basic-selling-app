import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// eslint-disable-next-line import/prefer-default-export
export async function GET() {
    try {
        const glasses = await prisma.glasses_3d.findMany();
        return NextResponse.json({ sell: glasses, status: 200 });
    } catch (error) {
        return NextResponse.json({
            message: 'Server error while fetching data',
            status: 500,
        });
    }
}
