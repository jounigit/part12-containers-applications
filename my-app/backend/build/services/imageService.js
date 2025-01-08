"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteImage = exports.uploadImage = void 0;
const imageKit_1 = __importDefault(require("../config/imageKit"));
const uploadImage = (file, fileName, folder) => {
    return new Promise((resolve, reject) => {
        imageKit_1.default.upload({
            file,
            fileName,
            folder,
        }, (err, result) => {
            if (err) {
                reject(err.message);
            }
            else {
                resolve(result);
            }
        });
    });
};
exports.uploadImage = uploadImage;
const deleteImage = (fileId) => {
    return new Promise((resolve, reject) => {
        imageKit_1.default.deleteFile(fileId, (err, result) => {
            if (err) {
                reject(err.message);
            }
            else {
                resolve(result);
            }
        });
    });
};
exports.deleteImage = deleteImage;
