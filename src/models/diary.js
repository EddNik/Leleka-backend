import { Schema, model } from 'mongoose';
import { DATE_REGEX } from '../constants/regex.js';

const diarySchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    title: {
      type: String,
      minLength: 1,
      maxLength: 64,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      minLength: 1,
      maxLength: 1000,
      required: true,
      trim: true,
    },
    date: {
      type: String,
      match: [DATE_REGEX, 'Please use the format YYYY-MM-DD'],
      default: () => new Date().toISOString().split('T')[0], 
      required: true,
    },
    emotions: {
      type: [Number], 
      required: true,
      validate: {
        validator: function (v) {
          return v && v.length >= 1 && v.length <= 12;
        },
        message: 'Emotions array must contain between 1 and 12 items',
      },
    },
  },
  { versionKey: false, timestamps: true },
);

diarySchema.index({ userId: 1, date: -1 });

export const Diary = model('Diary', diarySchema);