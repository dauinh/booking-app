import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Host } from '../../entities/host.entity';
import { Guest } from '../../entities/guest.entity';
import { hostRepository, guestRepository } from '../../data-source';
import { SECRET_KEY } from '../..';

// POST /auth/signup/host
export const signupHost = async (req: Request, res: Response) => {
  try {
    // Check if user already exists
    const { name, phone, address, email, password } = req.body;
    const findHost = await hostRepository.findOneBy({
      name: name,
      phone: phone,
      email: email
    });
    if (findHost) {
      return res.status(409).json({ error: 'Email is already registered' });
    }
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new host instance
    const newHost = new Host();
    newHost.name = name;
    newHost.phone = phone;
    newHost.address = address;
    newHost.email = email;
    newHost.password = hashedPassword;

    // Save the user to the database
    await hostRepository.save(newHost);

    // Generate an access token (JWT)
    const token = jwt.sign({ userId: newHost.id }, SECRET_KEY);

    res.json({ token });
  } catch (error) {
    console.error('Error during signup:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

// POST /auth/signup/guest
export const signupGuest = async (req: Request, res: Response) => {
  try {
    const { name, phone, email, password } = req.body;

    const findGuest = await guestRepository.findOneBy({
      name: name,
      phone: phone,
      email: email
    });
    if (findGuest) {
      return res.status(409).json({ error: 'Email is already registered' });
    }
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new host instance
    const newGuest = new Guest();
    newGuest.name = name;
    newGuest.phone = phone;
    newGuest.email = email;
    newGuest.password = hashedPassword;

    // Save the user to the database
    await guestRepository.save(newGuest);

    // Generate an access token (JWT)
    const token = jwt.sign({ userId: newGuest.id }, 'secret-key');

    res.json({ token });
  } catch (error) {
    console.error('Error during signup:', error);
    res.status(500).json({ error: 'Server error' });
  }
};
