const person = require("../models/person");

// post
module.exports.createPerson = async (req, res) => {
  const { name, age, favoriteFoods } = req.body;
  //create instance PERSON
  const newPerson = new person({
    name: name,
    age: age,
    favoriteFoods: favoriteFoods,
  });

  await newPerson.save();
  return res.status(200).json(newPerson);
};

// localhost:8080/person/name/{:searchedName} => get
//req.params
module.exports.findByName = async (req, res) => {
  const { searchedName } = req.params;
  const namePersons = await person.find({ name: searchedName });
  return res.status(200).json(namePersons);
};

// localhost:8080/person/id/{:searchid} => get
// req.params
module.exports.findByidperson = async (req, res) => {
  const { searchid } = req.params;
  const idperson = await person.findById(searchid);
  return res.status(200).json(idperson);
};

// localhost:8080/person/all )=> find
module.exports.findAllPersons = async (req, res) => {
  const allpersons = await person.find();
  return res.status(200).json(allpersons);
};

//localhost:8080/person/addhamburger/{id} => put
module.exports.addhamburger = async (req, res) => {
  const { id } = req.params;
  let personbyid = await person.findById(id);
  personbyid.favoriteFoods.push("hamburger");
  await personbyid.save();
  return res.status(200).json(personbyid);
};

// localhost:8080/person/delete/{:deletedid} => delete
module.exports.deletebyid = async (req, res) => {
  const { deletedid } = req.params;
  await person.findOneAndDelete(deletedid);
  return res.status(200).json("deleted");
};

//localhost:8080/person/update/:id

module.exports.updateDatabyid = async (req, res) => {
  const { id } = req.params;
  const { name, age, favoriteFoods } = req.body;
  await person.findByIdAndUpdate(id, {
    name: name,
    age: age,
    favoriteFoods: favoriteFoods,
  });
  return res.status(200).json("updated");
};
