import { z } from "zod"

export const CreateUserSchema = z.object({
  name: z.string({ invalid_type_error: "O nome precisa ser um texto válido.", required_error: "O nome é obrigatório." })
    .min(3, { message: "O nome deve ter pelo menos 3 catacteres." })
    .trim(),
    
  email: z.string({ invalid_type_error: "O E-mail precisa ser um texto válido", required_error: "O e-mail é obrigatório." })
    .email({ message: "E-mail inválido." })
    .trim(),
    
  password: z.string({ invalid_type_error: "A senha precisa ser um texto válido.", required_error: "A senha é obrigatória." })
    .min(8, { message: "A senha precisa ter pelo menos 8 caracteres." })
    .trim()
})

export const AuthenticateUserSchema = z.object({
  email: z.string({ invalid_type_error: "O e-mail precisa ser um texto válido.", required_error: "O e-mail é obrigatório." })
    .email({ message: "E-mail inválido." })
    .trim(),
    
  password: z.string({ invalid_type_error: "A senha precisa ser um texto válido", required_error: "A senha é obrigatória." })
    .trim()
})

export const UpdateUserSchema = z.object({
  id: z.string()
    .uuid(),
    
  name: z.string({ invalid_type_error: "O nome precisa ser um texto válido." })
    .min(3, { message: "O nome precisa ter pelo menos 3 caracteres." })
    .trim()
    .optional(),
    
  email: z.string({ invalid_type_error: "O e-mail precisa ser um texto válido." })
    .email({ message: "E-mail inválido." })
    .trim()
    .optional(),
    
  password: z.string({ invalid_type_error: "A senha precisa ser um texto válido." })
    .min(8, { message: "A senha precisa ter pelo menos 8 caracteres." })
    .trim()
    .optional()
})

export const CreateMusicSchema = z.object({
  title: z.string({ invalid_type_error: "O título da música precisa ser um texto válido.", required_error: "O título da música é obrigatório." }),
  
  user_id: z.string()
    .uuid()
})

export const CreatePlaylistSchema = z.object({
  title: z.string({ invalid_type_error: "O título da playlist precisa ser um texto válido.", required_error: "O título da playlist é obrigatório." }),
  
  user_id: z.string()
    .uuid()
})