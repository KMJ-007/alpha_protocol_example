declare module 'alpha_protocol' {
  export class SignClient {
    constructor(port: string);
    connect(): Promise<void>;
    disconnect(): Promise<void>;
    writeMessage(message: string): Promise<void>;
    readMessage(): Promise<string>;
  }
}