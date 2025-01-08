"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const imagekit_1 = __importDefault(require("imagekit"));
const imageKit = new imagekit_1.default({
    publicKey: process.env.IMAGE_KIT_PUBLIC_KEY || '',
    privateKey: process.env.IMAGE_KIT_PRIVATE_KEY || '',
    urlEndpoint: process.env.IMAGE_KIT_ENDPOINT || '',
});
exports.default = imageKit;
