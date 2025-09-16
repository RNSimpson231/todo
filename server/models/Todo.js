import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    default: '',
    trim: false
  },
  finished: {
    type: Boolean,
    default: false
  }
}, { timestamps: true });

export default mongoose.model('Todo', todoSchema);
