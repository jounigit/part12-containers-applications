"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.update = exports.upload = exports.getOne = exports.getAll = void 0;
const prisma_1 = require("../services/prisma");
const picture_model_1 = require("../model/picture.model");
const promises_1 = __importDefault(require("node:fs/promises"));
const helper_1 = require("../model/helper");
const imageService_1 = require("../services/imageService");
//**************** Get all pictures */
const getAll = async (req, res) => {
    const pictures = await (0, picture_model_1.getPictures)();
    return res.status(200).json(pictures);
};
exports.getAll = getAll;
// ********************** Get picture  by ID *************************** //
const getOne = async (req, res) => {
    const id = Number.parseInt(req.params.id);
    // Check if the album exists in the database
    const picture = await (0, picture_model_1.getPictureOrThrowError)(id);
    return res.status(200).json(picture);
};
exports.getOne = getOne;
const upload = async (req, res) => {
    if (!req.user) {
        return res.status(400).send('No file sent or user not logged in');
    }
    try {
        const file = req.files?.image;
        if (!file || !req.user.id)
            throw new Error('No file sent');
        const fileName = file.name;
        const imgPath = file.tempFilePath;
        const folder = '/gl-demo';
        const imgBuffer = await promises_1.default.readFile(file.tempFilePath);
        const resizedImg = await (0, helper_1.onlyResizeImage)(imgBuffer, imgPath, 800);
        if (resizedImg) {
            const result = await (0, imageService_1.uploadImage)(resizedImg, fileName, folder);
            if (result) {
                const { fileId, name, url, thumbnailUrl } = result;
                if (!fileId || !name || !url || !thumbnailUrl)
                    throw new Error('Upload error');
                const newPic = await createNew(name, fileId, url, thumbnailUrl, req.user.id);
                console.log({ newPic });
                res.status(200).json({ success: true, data: newPic });
            }
        }
    }
    catch (error) {
        res.status(500).json({ success: false, message: error });
    }
};
exports.upload = upload;
const createNew = async (title, fileId, url, thumbnailUrl, userID) => {
    const data = {
        title,
        fileId,
        url,
        thumbnailUrl,
        userID: userID
    };
    const picture = await (0, picture_model_1.createPicture)(data);
    if (!picture)
        throw new Error('Could not add the picture');
    return picture;
};
// ****************** Create a new picture  ***********************
// export const create = async (req: Request, res: Response) => {
//   const { title, year, content, image, userID } = req.body
//   if (!image || !title || !userID) throw new Error( 'Missing data' )
//   const data = {
//     title,
//     year,
//     content,
//     image,
//     userID: Number.parseInt(userID as string)
//   }
//   const picture = await createPicture(data)
//   if (!picture) throw new Error('Could not add the picture')
//   return res.status(201).json({ data: picture, message: 'Picture created!' })
// }
// ***************** Update picture *******************************
const update = async (req, res) => {
    const id = Number.parseInt(req.params.id);
    if (!Object.keys(req.body).length)
        throw new Error('Nothing to update.');
    // Check if the album exists in the database
    await (0, picture_model_1.getPictureOrThrowError)(id);
    const picture = await prisma_1.prisma.picture.update({
        where: { id },
        data: { ...req.body },
    });
    if (!picture)
        throw new Error('Could not update the picture');
    return res.status(200).json(picture);
};
exports.update = update;
// ********* Delete a specific picture by its ID **********************
const remove = async (req, res) => {
    const id = Number.parseInt(req.params.id);
    const picture = await (0, picture_model_1.deletePicture)(id);
    (0, imageService_1.deleteImage)(picture.fileId);
    return res.status(200).json({ message: 'Picture deleted successfully' });
};
exports.remove = remove;
