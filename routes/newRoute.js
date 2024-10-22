import dbControl from '../control/newControl.js';
import { Router } from 'express';

const newRouter = Router();

newRouter.get('/', dbControl.createUsernameGet)
newRouter.post('/', dbControl.createUsernamePost)

export default newRouter