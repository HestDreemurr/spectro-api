import { Router } from "express"
import { createUserController } from "./useCases/CreateUser"
import { authenticateUserController } from "./useCases/AuthenticateUser"

const router = Router()

router.post("/users", (request, response) => createUserController.handle(request, response))

router.post("/login", (request, response) => authenticateUserController.handle(request, response))

export default router