const { People } = require("../models/People");

module.exports.PeopleAssign = async (req, res) => {
  try {
    const { firstName, lastName, email, model, city, state, phone } = req.body;
    const temp = await People.create({
      firstName,
      lastName,
      email,
      model,
      city,
      state,
      phone,
    });
    return res.json("ok");
  } catch (err) {
    return res.json("err");
  }
};
