import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// eslint-disable-next-line import/prefer-default-export
export async function GET() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    try {
        const showing = await prisma.showing.findMany({
            where: {
                date: {
                    gt: today,
                },
            },
            include: {
                film: true,
            },
            orderBy: [
                {
                    date: 'desc',
                },
            ],
        });
        return NextResponse.json({ sell: showing, status: 200 });
    } catch (error) {
        return NextResponse.json({
            message: 'Server error while fetching data',
            status: 500,
        });
    }
}
