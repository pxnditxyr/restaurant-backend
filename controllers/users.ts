import { Request, Response } from 'express';

export const getUsers = ( req: Request, res: Response ) => {
    res.send({
        msg: 'getUsers'
    });
};

export const getUser = ( req : Request, res : Response ) => {
    const { id } = req.params;
    res.json({
        msg: 'Get users',
        id
    })
};

export const signupUser = ( req : Request, res : Response ) => {
    const { body } = req;
    res.json({
        msg: 'Post users',
        body
    })
};

export const updateUser = ( req : Request, res : Response ) => {
    const { body } = req;
    res.json({
        msg: 'Post users',
        body
    })
};

export const deleteUser = ( req : Request, res : Response ) => {
    const { id } = req.params;
    res.json({
        msg: 'Delete users',
        id
    })
};
