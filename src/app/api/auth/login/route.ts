import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
import { verifyPassword, signAccessToken } from '@/utils/auth';

const prisma = new PrismaClient();

// eslint-disable-next-line import/prefer-default-export
export async function POST(req: Request) {
    if (req.method !== 'POST') {
        return NextResponse.json({
            message: 'Method not allowed',
            status: 405,
        });
    }

    const { login, password } = await req.json();
    if (!login || !password) {
        return NextResponse.json({
            message: 'Login and password are required',
            status: 400,
        });
    }

    try {
        const user = await prisma.users.findUnique({
            where: { login },
        });

        if (!user) {
            return NextResponse.json({
                message: 'Invalid credentials',
                status: 401,
            });
        }

        const isValidPassword = await verifyPassword(password, user.password);

        if (!isValidPassword) {
            return NextResponse.json({
                message: 'Invalid credentials',
                status: 401,
            });
        }

        const loggedUser = {
            id: user.id,
            login: user.login,
            idEmployee: user.id_employee,
        };

        const accessToken = signAccessToken(loggedUser);

        const response = NextResponse.json({
            status: 200,
            message: 'Logged in successfully',
        });

        response.cookies.set('accessToken', accessToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 60 * 60 * 24,
            path: '/',
        });

        return response;
    } catch (error) {
        return NextResponse.json({
            message: 'Server error while logging in',
            error,
            status: 500,
        });
    }
}
