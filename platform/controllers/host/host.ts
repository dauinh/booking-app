import { Request, Response } from 'express';
import { hostRepository } from '../../data-source';

// GET /host/profile
export const getHostProfile = async (req: Request, res: Response) => {
    try {
        const userId = req.userId;
        const host = await hostRepository.findOneBy({ id: userId });
        res.json(host);
    } catch (error) {
        console.error('Error decrypting token:', error);
        res.status(401).json({ error: 'Invalid token' });
    }
};