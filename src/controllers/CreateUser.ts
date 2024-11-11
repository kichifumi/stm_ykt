import { Request, Response } from 'express';
import { UserRepository } from '../repositories/userRepository';

export const createUser = async (req: Request, res: Response) => {
  const userRepository = new UserRepository(process.env);

  try {
    const userData = req.body;
    const result = await userRepository.insertUser(userData);
    res.status(201).json(result);
  } catch (error) {
    console.error(`Error create users: ${error}`);
    res.status(500).json({ message: 'Failed to fetch users' });
  }
};
