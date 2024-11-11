import { Request, Response } from 'express';
import { UserRepository } from '../repositories/userRepository';

export const updateUser = async (req: Request, res: Response) => {
  const userRepository = new UserRepository(process.env);

  try {
    const userData = req.body;
    const result = await userRepository.updateUser(userData);
    res.status(200).json(result);
  } catch (error) {
    console.error(`Error create users: ${error}`);
    res.status(500).json({ message: 'Failed to fetch users' });
  }
};