"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const verifyToken = (req, res, next) => {
    const token = req.cookies["auth_token"];
    if (!token) {
        return res.status(401).json({ message: "Unauthorized jii" });
    }
    try {
        const decode = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET_KEY);
        req.userId = decode.userId;
        next();
    }
    catch (error) {
        return res.status(401).json({ message: "Unauthorized hii" });
    }
};
exports.verifyToken = verifyToken;
