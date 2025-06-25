import Music from "../entities/Music"

export interface File {
  fieldname: string,
  originalname: string,
  mimetype: string,
  size: number,
  filename: string,
  buffer: Buffer
}

export interface IMusicsRepository {
  create(music: Music): Promise<void>,
  upload(music: File): Promise<string>
}