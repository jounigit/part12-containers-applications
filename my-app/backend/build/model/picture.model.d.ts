import type { Album, Picture } from '@prisma/client';
export declare const getPictures: () => Promise<Picture[]>;
export declare function getPictureOrThrowError(id: number): Promise<{
    url: string;
    title: string;
    year: string | null;
    content: string | null;
    createdAt: Date;
    updatedAt: Date;
    id: number;
    userID: number;
    fileId: string;
    thumbnailUrl: string;
}>;
export interface INewPicture {
    title: string;
    year?: string;
    content?: string;
    fileId: string;
    url: string;
    thumbnailUrl: string;
    userID: number;
}
export declare const createPicture: (data: INewPicture) => Promise<Picture>;
export declare const updatePicture: (id: number, data: Partial<Album>) => Promise<{
    url: string;
    title: string;
    year: string | null;
    content: string | null;
    createdAt: Date;
    updatedAt: Date;
    id: number;
    userID: number;
    fileId: string;
    thumbnailUrl: string;
}>;
export declare const deletePicture: (id: number) => Promise<{
    url: string;
    title: string;
    year: string | null;
    content: string | null;
    createdAt: Date;
    updatedAt: Date;
    id: number;
    userID: number;
    fileId: string;
    thumbnailUrl: string;
}>;
