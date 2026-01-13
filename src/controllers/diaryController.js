import { Diary } from '../models/diary.js';
import createHttpError from 'http-errors';

//Add 'populate' from GET
export const getDiaryEntries = async (req, res) => {
  const userId = req.user._id;

  const entries = await Diary.find({ userId })
    .sort({ date: -1 })
    .populate({ path: 'emotions', select: 'title' });

  res.status(200).json({
    status: 200,
    message: 'Successfully retrieved diary entries!',
    data: entries,
  });
};

// Get one diary entry by id
export const getDiaryEntryById = async (req, res) => {
  const { id } = req.params;
  const userId = req.user._id;

  const entry = await Diary.findOne({ _id: id, userId }).populate({
    path: 'emotions',
    select: 'title',
  });

  if (!entry) {
    throw createHttpError(404, 'Diary entry not found');
  }

  res.status(200).json({
    status: 200,
    message: 'Successfully retrieved diary entry!',
    data: entry,
  });
};

export const createDiaryEntry = async (req, res) => {
  const userId = req.user._id;
  const diaryData = { ...req.body, userId };

  const newEntry = await Diary.create(diaryData);

  const populatedEntry = await Diary.findById(newEntry._id).populate({
    path: 'emotions',
    select: 'title',
  });

  res.status(201).json({
    status: 201,
    message: 'Diary entry created successfully!',
    data: populatedEntry,
  });
};

export const updateDiaryEntry = async (req, res) => {
  const { id } = req.params;
  const userId = req.user._id;

  const updatedEntry = await Diary.findOneAndUpdate(
    { _id: id, userId },
    req.body,
    { new: true, runValidators: true },
  ).populate({ path: 'emotions', select: 'title' });

  if (!updatedEntry) {
    throw createHttpError(404, 'Diary entry not found');
  }

  res.status(200).json({
    status: 200,
    message: 'Diary entry updated successfully!',
    data: updatedEntry,
  });
};

export const deleteDiaryEntry = async (req, res) => {
  const { id } = req.params;
  const userId = req.user._id;

  const deletedEntry = await Diary.findOneAndDelete({
    _id: id,
    userId,
  }).populate({ path: 'emotions', select: 'title' });

  if (!deletedEntry) {
    throw createHttpError(404, 'Diary entry not found');
  }

  res.status(200).json({
    status: 200,
    message: 'Diary entry deleted successfully!',
    data: deletedEntry,
  });
};
