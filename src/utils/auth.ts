import argon2 from 'argon2';
import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.JWT_SECRET || 'secret_key';
const REFRESH_SECRET_KEY =
    process.env.REFRESH_SECRET_KEY || 'refresh_secret_key';

export const HashPassword = async (password: string): Promise<string> => {
    return argon2.hash(password);
};

export const verifyPassword = async (
    password: string,
    hashedPassword: string
): Promise<Boolean> => {
    return argon2.verify(hashedPassword, password);
};

export const signAccessToken = (user: {
    id: number;
    login: string;
}): string => {
    return jwt.sign({ id: user.id, login: user.login }, SECRET_KEY, {
        algorithm: 'HS256',
        expiresIn: '15m',
    });
};

export const signRefreshToken = (user: {
    id: number;
    login: string;
}): string => {
    return jwt.sign({ id: user.id, login: user.login }, REFRESH_SECRET_KEY, {
        algorithm: 'HS256',
        expiresIn: '2d',
    });
};

export const verifyAccessToken = (token: string): any | null => {
    try {
        return jwt.verify(token, SECRET_KEY);
    } catch (error) {
        return null;
    }
};

export const verifyRefreshToken = (token: string): any | null => {
    try {
        return jwt.verify(token, REFRESH_SECRET_KEY);
    } catch (error) {
        return null;
    }
};
