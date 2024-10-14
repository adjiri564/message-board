import {homeController} from "../control/homeControl.js";
import { Router } from "express";

const router = Router();
router.get('/', homeController.get)


export default router