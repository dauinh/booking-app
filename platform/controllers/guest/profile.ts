import { Request, Response } from 'express';
import { guestRepository } from '../../data-source';

// GET /guest/profile
export const getGuestProfile = async (req: Request, res: Response) => {
  try {
    const userId = req.userId;
    const guest = await guestRepository.findOneBy({ id: userId });
    res.json(guest);
  } catch (error) {
    console.error('Error finding guest:', error);
    res.status(401).json({ error: 'Invalid guest' });
  }
};
