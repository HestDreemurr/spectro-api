import { SearchMusicUseCase } from "./SearchMusicUseCase"
import { Request, Response } from "express"

export class SearchMusicController {
  constructor(
    private searchMusicUseCase: SearchMusicUseCase
  ) {}
  
  async handle(request: Request, response: Response) {
    const query = request.query?.query
    
    if (!query) {
      return response.status(400).json({
        message: "Parametro de busca não encontrado."
      })
    }
    
    try {
      const data = await this.searchMusicUseCase.execute({ query })
      
      return response.status(200).json(data)
    } catch (err) {
      return response.status(400).json({
        message: err.message ?? "Erro inesperado."
      })
    }
  }
}