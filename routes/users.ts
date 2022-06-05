import { Router } from 'express';
import { deleteUser, getUser, getUsers, signupUser, updateUser } from '../controllers/users';

const router = Router();

router.get( '/', getUsers );
router.get( '/:id', getUser );
router.post( '/', signupUser );
router.put( '/:id', updateUser );
router.delete( '/:id', deleteUser );

export default router;
