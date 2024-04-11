import { Request, Response, NextFunction } from "express";


const isUUID = (value: string): boolean => {
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    return uuidRegex.test(value);
  }

export const validateId = (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params
    
    if (!isUUID(id)) {
        next({ message: 'Id invalido', statusCode: 400 })
    } else {
        next()
    }
}