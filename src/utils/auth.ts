import argon2 from 'argon2';
import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.JWT_SECRET || 'secret_key';

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
    idEmployee: number;
}): string => {
    return jwt.sign(
        { id: user.id, login: user.login, idEmployee: user.idEmployee },
        SECRET_KEY,
        {
            algorithm: 'HS256',
            expiresIn: '1d',
        }
    );
};
