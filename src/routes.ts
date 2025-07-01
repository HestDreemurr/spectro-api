import { Router } from "express"

import { createUserController } from "./useCases/Users/CreateUser"
import { authenticateUserController } from "./useCases/Users/AuthenticateUser"
import { deleteUserController } from "./useCases/Users/DeleteUser"
import { updateUserController } from "./useCases/Users/UpdateUser"
import { findUserController } from "./useCases/Users/FindUser"
import { createMusicController } from "./useCases/Musics/CreateMusic"
import { searchMusicController } from "./useCases/Musics/SearchMusic"
import { userMusicsController } from "./useCases/Musics/UserMusics"

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

router.get("/musics/get", authenticateUser, (request, response) => userMusicsController.handle(request, response))

export default router