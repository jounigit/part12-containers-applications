import type { Request, Response } from 'express';
declare const login: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export default login;
