import { Router, Request, Response } from 'express';
import { AppDataSource } from '../data-source'
import { Host } from '../entity/Host'


const router: Router = Router();

// sending to frontend
// send block of data using res.json()
router.get("/", async function (req: Request, res: Response) {
    const hosts = await AppDataSource.getRepository(Host).find();
    res.json(hosts);
});

router.get("/:id", async function (req: Request, res: Response) {
    const results = await AppDataSource.getRepository(Host).findOneBy({
        id: req.params.id,
    });
    return res.send(results)
});

router.post("/", async function (req: Request, res: Response) {
    const host = await AppDataSource.getRepository(Host).create(req.body);
    const results = await AppDataSource.getRepository(Host).save(host);
    return res.send(results)
})

// router.put("/hosts/:id", async function (req: Request, res: Response) {
//     const host = await AppDataSource.getRepository(Host).findOneBy({
//         id: req.params.id,
//     });
//     AppDataSource.getRepository(Host).merge(host, req.body);
//     const results = await AppDataSource.getRepository(Host).save(host);
//     return res.send(results)
// });

router.delete("/:id", async function (req: Request, res: Response) {
    const results = await AppDataSource.getRepository(Host).delete(req.params.id);
    return res.send(results)
});

export default router;