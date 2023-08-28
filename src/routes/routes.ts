import { Router } from "express";
import { CreateUserControler } from "../controller/CreateUserController";

const routes = Router();

const createUser = new CreateUserControler();

routes.post("/user", createUser.handle);
routes.get("/user", (req, res) => {
    res.send('Hello World!!')
})

export { routes }