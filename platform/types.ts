export interface DecodedTokenPayload {
  userId: string;
}

declare global {
  namespace Express {
    export interface Request {
      userId?: string;
    }
  }
}
