import { Request, Response } from 'express';
import { hostRepository } from '../../data-source';

// GET /host/properties
export const getHostProperties = async (req: Request, res: Response) => {
  try {
    const userId = req.userId;
    const properties = await hostRepository
      .createQueryBuilder('host')
      .where({ id: userId })
      .select(['properties', 'host.id', 'properties.id'])
      .leftJoin('host.properties', 'properties') // bar is the joined table
      .getMany();
    res.json(properties[0].properties);
  } catch (error) {
    console.error('Error finding properties:', error);
    res.status(400).json({ error: 'Invalid properties' });
  }
};
