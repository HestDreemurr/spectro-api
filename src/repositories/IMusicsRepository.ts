import Music from "../entities/Music"

export interface File {
  fieldname: string,
  originalname: string,
  mimetype: string,
  size: number,
  filename: string,
  buffer: Buffer
}

export interface Like {
  user_id: string,
  music_id: string
}

export interface IMusicsRepository {
  create(music: Music): Promise<void>,
  upload(music: File): Promise<string>,
  search(query: string): Promise<Music[]>,
  getUserMusics(userId: string): Promise<Music[]>,
  list(): Promise<Music[]>,
  like(like: Like): Promise<void>,
  unlike(like: Like): Promise<void>,
  listLikedMusics(userId: string): Promise<Music[]>
}