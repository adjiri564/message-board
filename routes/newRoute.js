import { newControl } from "../control/newControl.js";
import { Router } from "express";

const newRouter = Router();

newRouter.get('/', newControl.get);
newRouter.post('/', newControl.post)

export default newRouter