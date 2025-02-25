import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
import { HashPassword } from '../../../../utils/auth';

const prisma = new PrismaClient();

// eslint-disable-next-line import/prefer-default-export
export async function POST(req: Request) {
    if (req.method !== 'POST') {
        return NextResponse.json(
            { message: 'Method not allowed' },
            { status: 405 }
        );
    }

    const { login, password } = await req.json();
    if (!login || !password) {
        return NextResponse.json(
            { message: 'Login and password are required' },
            { status: 400 }
        );
    }

    try {
        const existingUser = await prisma.users.findUnique({
            where: { login },
        });
        if (existingUser) {
            return NextResponse.json(
                { message: 'User arleady exist' },
                { status: 400 }
            );
        }

        const hashedPassword = await HashPassword(password);

        await prisma.users.create({
            data: { login, password: hashedPassword },
        });

        return NextResponse.json(
            { message: 'User registered successfully' },
            { status: 201 }
        );
    } catch (error) {
        return NextResponse.json(
            { message: 'Error creating user', error },
            { status: 500 }
        );
    }
}
