import { Router } from 'express';
import { celebrate, Joi } from 'celebrate';
import {
  getCurrentUserController,
  updateAvatarController,
  updateUserController,
} from '../controllers/userController.js';
import { authenticate } from '../middlewares/authenticate.js';
import ctrlWrapper from '../helper/ctrlWrapper.js';
import { BABY_SEX } from '../constants/babySex.js';

const router = Router();

router.get(
  '/api/users/current',
  authenticate,
  ctrlWrapper(getCurrentUserController),
);

router.patch(
  '/api/users/avatar',
  authenticate,
  celebrate({
    body: Joi.object({
      avatar: Joi.string().uri().required(),
    }),
  }),
  ctrlWrapper(updateAvatarController),
);

router.patch(
  '/api/users/update',
  authenticate,
  celebrate({
    body: Joi.object({
      name: Joi.string().trim().min(1).max(32),
      gender: Joi.string().valid(...BABY_SEX),
      theme: Joi.string().valid(...BABY_SEX),
      dueDate: Joi.string().pattern(/^\d{4}-\d{2}-\d{2}$/),
    }),
  }),
  ctrlWrapper(updateUserController),
);

export default router;
