import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { AppDataSource } from '../../data-source';
import { Host } from "../../entities/host.entity";

interface DecodedTokenPayload { userId: string; }

// GET /host/all
export const getAllHosts = async (req: Request, res: Response) => {
    const hosts = await AppDataSource.getRepository(Host).find();
    res.json(hosts);
};

// GET /host/profile
export const getHostProfile = async (req: Request, res: Response) => {
    try {
        const { token } = req.cookies;
        const decodedToken = jwt.verify(token, 'secret-key') as DecodedTokenPayload;
        const id = decodedToken.userId;

        const host = await AppDataSource.getRepository(Host).findOneBy({ id: id });
        res.json(host);
    } catch (error) {
        console.error('Error decoding JWT:', error);
        res.status(401).json({ error: 'Error decoding JWT' });
    }
};