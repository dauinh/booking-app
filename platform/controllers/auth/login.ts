import { Request, Response } from 'express';

// POST /auth/login
export const login = async (req: Request, res: Response) => {
    console.log(req.body);
    return res.status(201);
};