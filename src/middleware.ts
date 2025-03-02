import { NextRequest, NextResponse } from 'next/server';
import { verifyToken } from './utils/verify';

export function middleware(req: NextRequest) {
    const token = req.cookies.get('accessToken')?.value;

    if (req.nextUrl.pathname === '/') {
        if (!token) {
            return NextResponse.next();
        }

        const decoded = verifyToken(token);

        if (!decoded) {
            return NextResponse.next();
        }
        return NextResponse.redirect(new URL('/dashboard', req.url));
    }

    if (!token) {
        return NextResponse.redirect(new URL('/', req.url));
    }

    const decoded = verifyToken(token);

    if (!decoded) {
        return NextResponse.redirect(new URL('/', req.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/', '/dashboard/:path*', '/api/:path*'],
};
