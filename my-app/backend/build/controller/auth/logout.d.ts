import { Request, Response } from 'express';
declare const logout: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export default logout;
