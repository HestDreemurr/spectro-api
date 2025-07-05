interface IAdress {
  name: string,
  email: string
}

export interface IMessage {
  to: IAdress
  subject: string,
  body: string
}

export interface IMailProvider {
  sendMail(message: IMessage): Promise<void>
}