import jwt from 'jsonwebtoken';

export const generateHash = (properties: any, key: string, minutes: number) => {
    const payload = {
        exp: Math.floor(Date.now() / 1000) + (minutes * 60),
        data: properties
    }

    return jwt.sign(payload, key);
}