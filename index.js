// The provided course information.
const CourseInfo = {
  id: 451,
  name: "Introduction to JavaScript",
};

// The provided assignment group.
const AssignmentGroup = {
  id: 12345,
  name: "Fundamentals of JavaScript",
  course_id: 451,
  group_weight: 25,
  assignments: [
    {
      id: 1,
      name: "Declare a Variable",
      due_at: "2023-01-25",
      points_possible: 50,
    },
    {
      id: 2,
      name: "Write a Function",
      due_at: "2023-02-27",
      points_possible: 150,
    },
    {
      id: 3,
      name: "Code the World",
      due_at: "3156-11-15",
      points_possible: 500,
    },
  ],
};

// The provided learner submission data.
const LearnerSubmissions = [
  {
    learner_id: 125,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-25",
      score: 47,
    },
  },
  {
    learner_id: 125,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-02-12",
      score: 150,
    },
  },
  {
    learner_id: 125,
    assignment_id: 3,
    submission: {
      submitted_at: "2023-01-25",
      score: 400,
    },
  },
  {
    learner_id: 132,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-24",
      score: 39,
    },
  },
  {
    learner_id: 132,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-03-07",
      score: 140,
    },
  },
];

// Function to compile assignment scores for each learner
function compileAssignmentScoresByLearner(assignments, submissions) {
  let compiledData = {};

  submissions.forEach((submission) => {
    let learnerId = submission.learner_id;
    let assignmentId = submission.assignment_id;
    let score = submission.submission.score;

    if (!compiledData[learnerId]) {
      compiledData[learnerId] = {};
    }

    let assignment = assignments.find((assign) => assign.id === assignmentId);
    if (assignment) {
      let assignmentName = assignment.name;
      compiledData[learnerId][assignmentName] = score;
    }
  });

  return compiledData;
}

// // Example usage:
// const compiledData = compileAssignmentScoresByLearner(
//   AssignmentGroup.assignments,
//   LearnerSubmissions
// );
// console.log(compiledData);

// // Function to compile assignment scores and calculate average for each learner
// function compileAssignmentScoresAndAverageByLearner(assignments, submissions) {
//   let compiledData = {};

//   submissions.forEach((submission) => {
//     let learnerId = submission.learner_id;
//     let assignmentId = submission.assignment_id;
//     let score = submission.submission.score;

//     if (!compiledData[learnerId]) {
//       compiledData[learnerId] = {
//         scores: [],
//         average: 0,
//       };
//     }

//     let assignment = assignments.find((assign) => assign.id === assignmentId);
//     if (assignment) {
//       let assignmentName = assignment.name;
//       compiledData[learnerId].scores.push({
//         assignment: assignmentName,
//         score: score,
//       });
//     }
//   });

//   // Calculate average score for each learner
//   Object.keys(compiledData).forEach((learnerId) => {
//     let totalScore = compiledData[learnerId].scores.reduce(
//       (acc, val) => acc + val.score,
//       0
//     );
//     let averageScore = totalScore / compiledData[learnerId].scores.length;
//     compiledData[learnerId].average = averageScore;
//   });

//   return compiledData;
// }

// // Example usage:
// const compiledDataWithAverage = compileAssignmentScoresAndAverageByLearner(
//   AssignmentGroup.assignments,
//   LearnerSubmissions
// );
// console.log(compiledDataWithAverage);

function getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions) {
  //new array of empty objs
  let dataLearne = [];

  // loop through submission data.
  for (let i = 0; i < LearnerSubmissions.length; i++) {
    if (
      !dataLearne.some((item) => item.id === LearnerSubmissions[i].learner_id)
    ) {
      let obj = {
        id: LearnerSubmissions[i].learner_id,
        // assignment: LearnerSubmissions[i].assignment_id,
      };
      dataLearne.push(obj);
    }

    for (let i = 0; i < LearnerSubmissions.length; i++) {
      obj = {
        Assignment: LearnerSubmissions[i].assignment_id,
      };
      dataLearne.push(obj);
    }
  }
  console.log(dataLearne);
  getLearnerData();
  // Check to make sure assignment exists in assignment group.
  // Check to see if the assignment is due yet; if not, continue.
  // Check to see if the submission was late; if so, deduct 10% of the maximum possible points.
  // Find existing submission for this learner, if any.
  // If the learner already has submission (or in other words if the submissions exists), add the new score to the existing data.
  // otherwise, create a new submission object. by pushing object to the results array
  //

  // return result;
}

// getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

// function createSubmissionObject(learnerId, assignmentId, submittedAt, score) {
//   // This function creates a new object containing information about a learner's submission for an assignment.

//   // Args:
//   //     learnerId (int): The unique identifier for the learner.
//   //     assignmentId (int): The unique identifier for the assignment.
//   //     submittedAt (string): The date and time the assignment was submitted (in YYYY-MM-DD format).
//   //     score (int): The score the learner received for the assignment.

//   // Returns:
//   //     object: A new object containing the learner ID, assignment ID, submission time, and score.

//   return {
//     learner_id: learnerId,
//     assignment_id: assignmentId,
//     submitted_at: submittedAt,
//     score: score,
//   };
// }
// createSubmissionObject();
// // function getLearnerData(course, ag, submissions) {
// //   // here, we would process this data to achieve the desired result.
// //   const result = [
// //     {
// //       id: 125,
// //       avg: 0.985, // (47 + 150) / (50 + 150)
// //       1: 0.94, // 47 / 50
// //       2: 1.0, // 150 / 150
// //     },
// //     {
// //       id: 132,
// //       avg: 0.82, // (39 + 125) / (50 + 150)
// //       1: 0.78, // 39 / 50
// //       2: 0.833, // late: (140 - 15) / 150
// //     },
// //   ];

// //   return result;
// // }

// // const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

// // console.log(result);
