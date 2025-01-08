import type { Request, Response } from 'express';
export declare const getAll: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const getOne: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const upload: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const update: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const remove: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
