import { PrismaClient } from '@prisma/client';
import { NextResponse, NextRequest } from 'next/server';
import { verifyToken } from 'src/utils/verify';

interface TokenInterface {
    id: number;
    login: string;
    idEmployee: number;
}

const prisma = new PrismaClient();
// eslint-disable-next-line import/prefer-default-export
export async function POST(req: NextRequest) {
    if (req.method !== 'POST') {
        return NextResponse.json(
            { message: 'Method not allowed' },
            { status: 405 }
        );
    }

    const { showing } = await req.json();

    if (!showing) {
        return NextResponse.json({
            message: 'Server error while fetching information',
            status: '500',
        });
    }

    try {
        const information = await prisma.showing.findUnique({
            where: { id: showing },
        });

        return NextResponse.json({ information, status: 200 });
    } catch (error) {
        return NextResponse.json({
            message: 'Server error while fetching information',
            status: 500,
        });
    }
}
