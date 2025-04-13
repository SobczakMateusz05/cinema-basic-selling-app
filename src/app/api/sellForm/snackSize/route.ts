import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// eslint-disable-next-line import/prefer-default-export
export async function GET() {
    try {
        const snackSize = await prisma.snack_size.findMany();
        return NextResponse.json({ sell: snackSize, status: 200 });
    } catch (error) {
        return NextResponse.json({
            message: 'Server error while fetching data',
            status: 500,
        });
    }
}
