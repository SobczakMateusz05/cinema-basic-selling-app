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

    const { name, surname, email, showing } = await req.json();

    const token = req.cookies.get('accessToken')?.value;

    if (!token) {
        return NextResponse.redirect(new URL('/', req.url));
    }

    const decodedToken: TokenInterface = verifyToken(token);

    const { idEmployee } = decodedToken;

    if (!name || !surname || !email || !showing) {
        return NextResponse.json({
            message: 'Fields are not fill propertly',
            status: '400',
        });
    }

    try {
        await prisma.sold_ticket.create({
            data: {
                name,
                surname,
                email,
                id_showing: showing,
                id_employee: idEmployee,
            },
        });

        return NextResponse.json({ message: 'Sold successfully', status: 200 });
    } catch (error) {
        return NextResponse.json({
            message: 'Server error while solding',
            status: 500,
        });
    }
}
