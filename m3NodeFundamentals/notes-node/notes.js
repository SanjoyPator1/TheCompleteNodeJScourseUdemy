console.log("starting notes.js");

module.exports.age = 25;

module.exports.addNote = () => {
  console.log('addNote');
  return 'New note';
};

module.exports.addNumbers = (a, b) => {
  return a+b;
}
