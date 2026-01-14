import { Router } from 'express';
import { celebrate } from 'celebrate';
import { authenticate } from '../middlewares/authenticate.js';
import ctrlWrapper from '../helper/ctrlWrapper.js';
import {
  createDiaryEntry,
  getDiaryEntries,
  updateDiaryEntry,
  deleteDiaryEntry,
  getDiaryEntryById,
} from '../controllers/diaryController.js';
import {
  createDiarySchema,
  updateDiarySchema,
  getDiaryIdParamSchema,
} from '../validations/diaryValidation.js';

const diaryRouter = Router();

diaryRouter.use(authenticate);

diaryRouter.post(
  '/api/diaries',
  celebrate(createDiarySchema),
  ctrlWrapper(createDiaryEntry),
);

diaryRouter.get('/api/diaries', ctrlWrapper(getDiaryEntries));

diaryRouter.get(
  '/api/diaries/:id',
  celebrate(getDiaryIdParamSchema),
  ctrlWrapper(getDiaryEntryById),
);

diaryRouter.patch(
  '/api/diaries/:id',
  celebrate(updateDiarySchema),
  ctrlWrapper(updateDiaryEntry),
);

//Add celebrate
diaryRouter.delete(
  '/api/diaries/:id',
  celebrate(getDiaryIdParamSchema),
  ctrlWrapper(deleteDiaryEntry),
);

export default diaryRouter;
