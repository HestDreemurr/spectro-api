import { Router } from "express"

import { createUserController } from "./useCases/CreateUser"
import { authenticateUserController } from "./useCases/AuthenticateUser"
import { deleteUserController } from "./useCases/DeleteUser"
import { updateUserController } from "./useCases/UpdateUser"
import { findUserController } from "./useCases/FindUser"
import { createMusicController } from "./useCases/CreateMusic"
import { searchMusicController } from "./useCases/SearchMusic"

import { authenticateUser } from "./middlewares/authenticate"

import multer from "multer"

const router = Router()
const storage = multer.memoryStorage()
const upload = multer({ storage })

// USERS
router.post("/users/sign-in", (request, response) => createUserController.handle(request, response))

router.post("/users/log-in", (request, response) => authenticateUserController.handle(request, response))

router.put("/users/update", authenticateUser, (request, response) => updateUserController.handle(request, response))

router.delete("/users/delete", authenticateUser, (request, response) => deleteUserController.handle(request, response))

router.get("/users/find", authenticateUser, (request, response) => findUserController.handle(request, response))


// MUSICS
router.post("/musics/create", authenticateUser, upload.single("music"), (request, response) => createMusicController.handle(request, response))

router.get("/musics/search", authenticateUser, (request, response) => searchMusicController.handle(request, response))

export default router