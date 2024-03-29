// Kata 11 - Organizing Instructors

//In this exercise, we will be given a list of instructors and we will create a single object to organize them based on their course.

const organizeInstructors = function(instructors) {
  let answer = {};
  instructors.forEach( function(item) {
    if(!answer[item.course]) {
      answer[item.course] = [];
      answer[item.course].push(item.name);
    } else {
      answer[item.course].push(item.name);
    }

  });
  return answer;
};



//TEST:

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));

/*
Expected Output
{
  iOS: ["Samuel"],
  Web: ["Victoria", "Karim", "Donald"]
}
{
  Blockchain: ["Brendan"],
  Web: ["David", "Carlos"],
  iOS: ["Martha"]
}
*/

