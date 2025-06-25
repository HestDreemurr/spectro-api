import { uuid } from "uuidv4"

export default class Music {
  public readonly id: string
  
  public title: string
  public music_url: string
  public user_id: string
  
  constructor(props: Omit<Music, "id">, id?: string) {
    Object.assign(this, props)
    
    if (!id) {
      this.id = uuid()
    }
  }
}