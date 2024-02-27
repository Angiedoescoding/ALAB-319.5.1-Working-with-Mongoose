import express from 'express';
import Grade from '../models/grade.mjs';

const router = express.Router();


//Get all grades
router.get('/', async (req, res) => {
  try {
    const grades = await Grade.find().limit(10);
    res.json(grades);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

//Create a new grade
router.post('/', async (req, res) => {
  try {
    const newGrade = await Grade.create(req.body);
    res.status(201).json(newGrade);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// Get a single grade 
router.get('/:id', async (req, res) => {
  try {
    const grade = await Grade.findById(req.params.id);
    if (!grade) {
      return res.status(404).send('The grade was not found.');
    }
    res.json(grade);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

//Delete a learner by id
router.delete('/learner/:learnerID', async (req, res)=>{
  try {
    await Grade.findByIdAndDelete(req.params.id);
    
    res.status(200).json({msg: "Item Deleted"})
  } catch (err) {
    console.error(err);
    res.status(500).json('Server error');
  }
})




// //Get a learner by ID
// router.get('/learner/:learnerID', async (req, res) => {
//   let collection = await db.collection('grades');
//   let query = { learner_id: Number(req.params.learnerID) };
//   let result = await collection.find(query).toArray();

//   if (!result) res.status(404).send('Not found');
//   else res.send(result).status(200);
// });


// // Create a GET route at /grades/stats --- calculating stats over 70$
// router.get('/stats', async (req, res) => {
//   let collection = await db.collection('grades');
//   let stats = await collection.aggregate([
//     {
//       $group: {
//         _id: "$student_id",       // or $student_id // $learner_id
//         numOver70: { $sum: {
//         $cond: [{ $gt: [{ $avg: "$scores,score"}, 70]}, 1, 0]    // comparing scores with 70; 1 and 0 in the $cond are either true (over 70) or false (less than 70)
//         } 
//       },
//       totalLearners: { $sum: 1 }
//       }
//     },
//     {
//       $project: {
//         _id: "$student_id",       // or $student_id //  $learner_id
//         numOver70: 1,
//         totalLearners: 1,
//         persentOver70: {
//           $multiply: [{ $divide: ["$numOver70", "$totalLearners"] }, 100]     // 100 - divide since looking for %
//           }
//       }
//     }
//   ]).toArray();

//   res.json(stats[0].status(200));
// });

// Create a GET route at /grades/stats/:id --->>> need to review again

// router.get('/stats/:id', async (req, res) => {
//   let classID = parseInt(req.params.id);
//   let collection = await db.collection('grades');
//   let stats = await collection.aggregate([
//     { match: { class_id: classID} },          // Match documents with the specified class_id
//     {
//       $group: {
//         id: "$student_id",

//       }
//     }
//   ])
// })


// //Get a class by class_id
// router.get('/class/:classID', async (req, res) => {
//   let collection = await db.collection('grades');
//   let query = { class_id: Number(req.params.classID) };
//   let result = await collection.find(query).toArray();

//   if (!result) res.status(404).send('Not found');
//   else res.json(result).status(200);
// });


// //Update a class_id PATCH
// router.patch('/class/:classID', async (req, res) => {
//   let collection = await db.collection('grades');
//   let query = { class_id: Number(req.params.classID) };

//   let result = await collection.updateMany(query, {
//     $set: { class_id: req.body.class_id },
//   });

//   console.log(result)
//   if (result.upsertedCount === 0 ) res.status(404).send('Not found');
//   else res.json(result).status(200);
// });

export default router;