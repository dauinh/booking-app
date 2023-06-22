import { guestRepository, hostRepository } from '../data-source';
import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { DecodedTokenPayload } from 'types';

export const validateHost = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { token } = req.cookies;
        if (!token) { throw new Error('Token not found in cookies'); }
        const decodedToken = jwt.verify(token, 'secret-key') as DecodedTokenPayload;
        const { userId } = decodedToken;
        const host = await hostRepository.findOneBy({ id: userId });
        if (host) {
            req.userId = userId; 
            next();
        }
    } catch (error) {
        console.error('Error decrypting token:', error);
        res.status(401).json({ error: 'Invalid token' });
    }
};

export const validateGuest = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { token } = req.cookies;
        if (!token) { throw new Error('Token not found in cookies'); }
        const decodedToken = jwt.verify(token, 'secret-key') as DecodedTokenPayload;
        const { userId } = decodedToken;
        const guest = await guestRepository.findOneBy({ id: userId });
        if (guest) {
            req.userId = userId; 
            next();
        }
    } catch (error) {
        console.error('Error decrypting token:', error);
        res.status(401).json({ error: 'Invalid token' });
    }
};