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

// Example usage:
const compiledData = compileAssignmentScoresByLearner(
  AssignmentGroup.assignments,
  LearnerSubmissions
);
console.log(compiledData);

// Function to compile assignment scores and calculate average for each learner
function compileAssignmentScoresAndAverageByLearner(assignments, submissions) {
  let compiledData = {};

  submissions.forEach((submission) => {
    let learnerId = submission.learner_id;
    let assignmentId = submission.assignment_id;
    let score = submission.submission.score;

    if (!compiledData[learnerId]) {
      compiledData[learnerId] = {
        scores: [],
        average: 0,
      };
    }

    let assignment = assignments.find((assign) => assign.id === assignmentId);
    if (assignment) {
      let assignmentName = assignment.name;
      compiledData[learnerId].scores.push({
        assignment: assignmentName,
        score: score,
      });
    }
  });

  // Calculate average score for each learner
  Object.keys(compiledData).forEach((learnerId) => {
    let totalScore = compiledData[learnerId].scores.reduce(
      (acc, val) => acc + val.score,
      0
    );
    let averageScore = totalScore / compiledData[learnerId].scores.length;
    compiledData[learnerId].average = averageScore;
  });

  return compiledData;
}

// Example usage:
const compiledDataWithAverage = compileAssignmentScoresAndAverageByLearner(
  AssignmentGroup.assignments,
  LearnerSubmissions
);
console.log(compiledDataWithAverage);
