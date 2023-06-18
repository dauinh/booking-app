import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Host } from 'entities/host.entity';
import { AppDataSource } from 'data-source';
import { Guest } from 'entities/guest.entity';

// POST /api/auth/signup
export const signup = async (req: Request, res: Response) => {
  try {
    const { name, email, password, isHost } = req.body;


    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Check if user already exists
    if (isHost) {
        const hostRepository = await AppDataSource.getRepository(Host);
        const findHost = await hostRepository.findOneBy({
            name: name,
            email: email
        });

        if (findHost) {
            return res.status(409).json({ error: 'Email is already registered' });
        }
        // Create a new host instance
        const newHost = new Host();
        newHost.name = name;
        newHost.email = email;
        newHost.password = hashedPassword;

        // Save the user to the database
        await hostRepository.save(newHost);

        // Generate an access token (JWT)
        const token = jwt.sign({ userId: newHost.id }, 'secret-key');

        res.json({ token });
    } else {
        const guestRepository = await AppDataSource.getRepository(Guest);
    
        const findGuest = await guestRepository.findOneBy({
            name: name,
            email: email
        });

        if (findGuest) {
            return res.status(409).json({ error: 'Email is already registered' });
        }
        // Create a new host instance
        const newGuest = new Host();
        newGuest.name = name;
        newGuest.email = email;
        newGuest.password = hashedPassword;

        // Save the user to the database
        await guestRepository.save(newGuest);

        // Generate an access token (JWT)
        const token = jwt.sign({ userId: newGuest.id }, 'secret-key');

        res.json({ token });
    }

    
  } catch (error) {
    console.error('Error during signup:', error);
    res.status(500).json({ error: 'Server error' });
  }
};