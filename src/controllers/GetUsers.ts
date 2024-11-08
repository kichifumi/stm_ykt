import { Request, Response } from 'express';
import { UserRepository } from '../repositories/userRepository';

export const getUsers = async (req: Request, res: Response) => {
    const userRepository = new UserRepository(process.env);

    try {
        const users = await userRepository.getUsers();
        res.status(200).json(users);
    } catch (error) {
        // console.error(`Error fetching users: ${error.message}`);
        console.error(`Error fetching users: ${error}`);
        res.status(500).json({ message: 'Failed to fetch users' });
    }
};
