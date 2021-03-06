/**
 * Direction:
 * Remove key that have null or undefined value
 *
 * Expected Result:
 * [
 *   { session_name: 'first test', classes: [{ students: [{ student_name: 'budi' }] }] },
 *   { classes: [{ class_name: 'second class', students: [{ student_name: 'adi' }] }] },
 * ]
 */
const data = [
  {
    session_name: 'first test',
    classes: [{ class_name: undefined, students: [{ student_name: 'budi' }] }],
  },
  {
    session_name: null,
    classes: [
      { class_name: 'second class', students: [{ student_name: 'adi' }] },
    ],
  },
];

function result(data) {
  // Your Code Here

  for (let i = 0; i < data.length; i++) {
    Object.keys(data[i]).forEach((key) => {
      if (data[i][key] === null || data[i][key] === undefined) {
        delete data[i][key];
      }
    });
  }
  return data;
}

console.log(result(data));
