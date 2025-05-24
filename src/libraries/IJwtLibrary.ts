export interface IJwtLibrary {
  encrypt(text: string): Promise<string>,
  compare(text: string, encryptedText: string): Promise<boolean>
}