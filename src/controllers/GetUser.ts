import { Request, Response } from 'express';
import { UserRepository } from '../repositories/userRepository';

export const getUser = async (req: Request, res: Response) => {
  const userRepository = new UserRepository(process.env);

  try {
    const userData = req.body;
    const user = await userRepository.getUser(userData.id);
    res.status(200).json(user);
  } catch (error) {
    console.error(`Error fetching users: ${error}`);
    res.status(500).json({ message: 'Failed to fetch users' });
  }
};
