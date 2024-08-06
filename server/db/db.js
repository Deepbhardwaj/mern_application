const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://deepmala:L@yalist!2024@cluster0.rtjgthc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})
.then(() => {
  console.log('MongoDB connected successfully!');
})
.catch((err) => {
  console.error('Error connecting to MongoDB:', err.message);
});
