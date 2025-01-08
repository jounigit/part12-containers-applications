/// <reference types="node" />
declare const uploadImage: (file: string | Buffer, fileName: string, folder: string) => Promise<unknown>;
declare const deleteImage: (fileId: string) => Promise<unknown>;
export { uploadImage, deleteImage };
