import { Router } from 'express';

// import { celebrate } from 'celebrate';
import { authenticate } from '../middlewares/authenticate.js';

const taskRouter = Router();

taskRouter.use(authenticate);
