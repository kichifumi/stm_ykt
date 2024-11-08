import { Request, Response } from 'express';

export const createUser = (req: Request, res: Response) => {
    const userData = req.body;
    // res.status(201).json({ message: 'CreateUser', user: userData });
    console.log(`Http function processed request for url "${"aaaa"}"`);
};
