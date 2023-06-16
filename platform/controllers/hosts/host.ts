import { Request, Response } from 'express';
import { AppDataSource } from '../../data-source';
import { Host } from "../../entities/host.entity";


const getAllHosts = async (req: Request, res: Response) => {
    const hosts = await AppDataSource.getRepository(Host).find();
    res.json(hosts);
};

export default getAllHosts;