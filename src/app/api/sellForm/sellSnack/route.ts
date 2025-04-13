import { PrismaClient } from '@prisma/client';
import { NextResponse, NextRequest } from 'next/server';
import { verifyToken } from 'src/utils/verify';

interface TokenInterface {
    id: number;
    login: string;
    idEmployee: number;
}

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
    if (req.method !== 'POST') {
        return NextResponse.json(
            { message: 'Method not allowed' },
            { status: 405 }
        );
    }

    const { snack, size } = await req.json();

    const token = req.cookies.get('accessToken')?.value;

    if (!token) {
        return NextResponse.redirect(new URL('/', req.url));
    }

    const decodedToken: TokenInterface = verifyToken(token);

    const { idEmployee } = decodedToken;

    if (!snack || !size) {
        return NextResponse.json({
            message: 'Snack and/or size are not selected',
            status: '400',
        });
    }

    try {
        await prisma.sold_snack.create({
            data: { id_snack: snack, id_size: size, id_employee: idEmployee },
        });

        return NextResponse.json({ message: 'Sold successfully', status: 200 });
    } catch (error) {
        return NextResponse.json({
            message: 'Server error while solding',
            status: 500,
        });
    }
}

export async function GET() {
    try {
        const snack = await prisma.snack.findMany();
        return NextResponse.json({ sell: snack, status: 200 });
    } catch (error) {
        return NextResponse.json({
            message: 'Server error while fetching data',
            status: 500,
        });
    }
}
