import { Router } from "express"
import { createUserController } from "./useCases/CreateUser"
import { authenticateUserController } from "./useCases/AuthenticateUser"
import { deleteUserController } from "./useCases/DeleteUser"
import { updateUserController } from "./useCases/UpdateUser"
import { authenticateUser } from "./middlewares/authenticate"

const router = Router()

router.post("/users/sign-in", (request, response) => createUserController.handle(request, response))

router.post("/users/log-in", (request, response) => authenticateUserController.handle(request, response))

router.put("/users/update", authenticateUser, (request, response) => updateUserController.handle(request, response))

router.delete("/users/delete", authenticateUser, (request, response) => deleteUserController.handle(request, response))

export default router