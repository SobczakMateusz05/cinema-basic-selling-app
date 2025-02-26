import { NextResponse } from 'next/server';
import { verifyRefreshToken, signAccessToken } from '@/utils/auth';

// eslint-disable-next-line import/prefer-default-export
export async function POST(req: Request) {
    const { refreshToken } = await req.json();

    if (!refreshToken) {
        return NextResponse.json(
            { message: 'Refresh token is required' },
            { status: 400 }
        );
    }

    const userData = verifyRefreshToken(refreshToken);
    if (!userData) {
        return NextResponse.json(
            { message: 'Invalid or expired refresh token' },
            { status: 401 }
        );
    }

    const accessToken = signAccessToken(userData);

    return NextResponse.json({
        accessToken,
        status: 200,
    });
}
