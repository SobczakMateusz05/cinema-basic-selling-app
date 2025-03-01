import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.JWT_SECRET || 'secret_key';

// eslint-disable-next-line import/prefer-default-export
export const verifyToken = (token: string): any | null => {
    try {
        return jwt.verify(token, SECRET_KEY);
    } catch (error) {
        return true;
    }
};
