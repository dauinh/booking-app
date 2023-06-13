import { Router, Request, Response } from 'express';
import { AppDataSource } from '../../data-source';
import { Guest } from '../../entity/Guest';


const router: Router = Router();

// sending to frontend
// send block of data using res.json()
router.get("/", async function (req: Request, res: Response) {
    const guests = await AppDataSource.getRepository(Guest).find();
    res.json(guests);
});

router.get("/:id", async function (req: Request, res: Response) {
    const results = await AppDataSource.getRepository(Guest).findOneBy({
        id: req.params.id,
    });
    return res.send(results)
});

router.post("/", async function (req: Request, res: Response) {
    const guest = await AppDataSource.getRepository(Guest).create(req.body);
    const results = await AppDataSource.getRepository(Guest).save(guest);
    return res.send(results)
})

// router.put("/guests/:id", async function (req: Request, res: Response) {
//     const guest = await AppDataSource.getRepository(Guest).findOneBy({
//         id: req.params.id,
//     });
//     AppDataSource.getRepository(Guest).merge(guest, req.body);
//     const results = await AppDataSource.getRepository(Guest).save(guest);
//     return res.send(results)
// });

router.delete("/:id", async function (req: Request, res: Response) {
    const results = await AppDataSource.getRepository(Guest).delete(req.params.id);
    return res.send(results)
});

export default router;