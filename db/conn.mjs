import mongoose from 'mongoose';
import dotenv from 'dotenv';


dotenv.config();

// Retrieving MongoDB string from environment variables
const connectionString = process.env.ATLAS_URI || '';

mongoose.connect(connectionString, {
  ___: true,
  ___: true,
  ___: true
}).then(() => {
  console.log('MongoDB was connected.');
}).catch((err) =>{
  console.error(`MongoDB connection error.`, err)
});



// Create a single-field index on class_id.
// Create a single-field index on learner_id.
// Create a compound index on learner_id and class_id, in that order, both ascending.


// try {
//   await db.collection('grades').createIndex({ "class_id": 1 });      // Create a single-field index on class_id
//   await db.collection('grades').createIndex({ "learner_id": 1 });  // Create a single-field index on learner_id.
//   await db.collection('grades').createIndex({ "learner_id": 1, "class_id": 1 });  // Create a compound index on learner_id and class_id, in that order, both ascending.
// } catch (e) {
//   console.error(e); 
// }



export default mongoose.connection;