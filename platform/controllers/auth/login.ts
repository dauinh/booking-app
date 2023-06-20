import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { AppDataSource } from '../../data-source';
import { Host } from '../../entities/host.entity';
import { Guest } from '../../entities/guest.entity';


// POST /auth/login/host
export const loginHost = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        // Find the host by email
        const hostRepository = await AppDataSource.getRepository(Host);
        const host = await hostRepository.findOneBy({ email: email });

        if (!host) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        // Compare passwords
        const isPasswordValid = await bcrypt.compare(password, host.password);
        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        // Generate an access token (JWT)
        const token = jwt.sign({ userId: host.id }, 'secret-key');
        res.cookie('token', token, {maxAge: 1 * 60 * 60 * 1000})
            .send('Token saved to session cookie');

    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ error: 'Server error' });
    }
};

// POST /auth/login/guest
export const loginGuest = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        // Find the user by email
        const guestRepository = await AppDataSource.getRepository(Guest);
        const guest = await guestRepository.findOneBy({ email: email });

        if (!guest) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        // Compare passwords
        const isPasswordValid = await bcrypt.compare(password, guest.password);
        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }
        // Generate an access token (JWT)
        const token = jwt.sign({ userId: guest.id }, 'secret-key');
        res.cookie('token', token, {maxAge: 1 * 60 * 60 * 1000})
            .send('Token saved to session cookie');

    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ error: 'Server error' });
    }
};