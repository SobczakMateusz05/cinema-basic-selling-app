import { NextResponse, NextRequest } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { verifyToken } from '@/utils/verify';

const prisma = new PrismaClient();

interface TokenInterface {
    id: number;
    login: string;
    idEmployee: number;
}

// eslint-disable-next-line import/prefer-default-export
export async function GET(req: NextRequest) {
    const token = req.cookies.get('accessToken')?.value;

    if (!token) {
        return NextResponse.redirect(new URL('/', req.url));
    }

    const decodedToken: TokenInterface = verifyToken(token);

    try {
        const userData = await prisma.employee.findUnique({
            where: { id: decodedToken.idEmployee },
        });
        return NextResponse.json({ userData, status: 200 });
    } catch (error) {
        return NextResponse.json({
            message: 'Server error while decoding',
            status: 500,
        });
    }
}
