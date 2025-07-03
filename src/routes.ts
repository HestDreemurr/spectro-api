import { Router } from "express"

import { createUserController } from "./useCases/Users/CreateUser"
import { authenticateUserController } from "./useCases/Users/AuthenticateUser"
import { deleteUserController } from "./useCases/Users/DeleteUser"
import { updateUserController } from "./useCases/Users/UpdateUser"
import { findUserController } from "./useCases/Users/FindUser"
import { createMusicController } from "./useCases/Musics/CreateMusic"
import { searchMusicController } from "./useCases/Musics/SearchMusic"
import { userMusicsController } from "./useCases/Musics/UserMusics"
import { listMusicsController } from "./useCases/Musics/ListMusics"
import { createPlaylistController } from "./useCases/Playlists/CreatePlaylist"
import { addMusicController } from "./useCases/Playlists/AddMusic"
import { listMusicsController as listPlaylistMusicsController } from "./useCases/Playlists/ListMusics"
import { userPlaylistsController } from "./useCases/Playlists/UserPlaylists"

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

router.get("/user/musics", authenticateUser, (request, response) => userMusicsController.handle(request, response))

router.get("/musics", authenticateUser, (request, response) => listMusicsController.handle(request, response))


// PLAYLISTS

router.post("/playlists/create", authenticateUser, (request, response) => createPlaylistController.handle(request, response))

router.post("/playlist/:playlist/music/:music", authenticateUser, (request, response) => addMusicController.handle(request, response))

router.get("/playlist/:playlist/musics", authenticateUser, (request, response) => listPlaylistMusicsController.handle(request, response))
  
router.get("/user/playlists", authenticateUser, (request, response) => userPlaylistsController.handle(request, response))

export default router