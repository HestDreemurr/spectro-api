import { uuid } from "uuidv4"

export default class Playlist {
  public readonly id: string
  
  public title: string
  public user_id: string
  
  constructor(props: Omit<Playlist, "id">, id?: string) {
    Object.assign(this, props)
    
    if (!id) {
      this.id = uuid()
    }
  }
}

export class PlaylistMusic {
  public readonly id: string
  
  public playlist_id: string
  public music_id: string
  
  constructor(props: Omit<PlaylistMusic, "id">, id?: string) {
    Object.assign(this, props)
    
    if (!id) {
      this.id = uuid()
    }
  }
}