import { Task } from '../models/tasks';

import createHttpError from 'http-errors';

export async function getTasksByUserId(req, res) {
  const { userId } = req.user._id;

  const tasks = await Task.find(userId).populate('User');

  res.status(200).json({
    status: 200,
    data: tasks,
  });
  if (!tasks) {
    throw createHttpError(404, 'Tool not found');
  }
}

export async function createTask(req, res) {
  const dataTask = { ...req.body, userId: req.user._id };
  const newTask = await createTask(dataTask);

  res.status(201).json({
    status: 201,
    message: 'Task created',
    data: newTask,
  });
}
