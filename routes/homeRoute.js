import hmCtrl from '../control/homeControl.js'
import { Router } from "express";

const router = Router();
router.get('/', hmCtrl.getUsernames)
router.post('/delete', hmCtrl.usersDeletePost)


export default router