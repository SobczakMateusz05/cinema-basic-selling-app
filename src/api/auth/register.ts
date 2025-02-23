import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import { HashPassword } from '@/utils/auth';

const prisma = new PrismaClient();

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { login, password } = req.body;
    if (!login || !password) {
        return res
            .status(400)
            .json({ message: 'Login and password are required' });
    }

    try {
        const existingUser = await prisma.uzytkownicy.findUnique({
            where: { login },
        });
        if (existingUser) {
            return res.status(400).json({ message: 'User arleady exist' });
        }

        const hashedPassword = await HashPassword(password);

        const newUser = await prisma.uzytkownicy.create({
            data: { login, haslo: hashedPassword },
        });

        res.status(201).json({
            message: 'User registered successfully',
            user: { login: newUser.login },
        });
    } catch (error) {
        res.status(500).json({ message: 'Error creating user', error });
    }
}
