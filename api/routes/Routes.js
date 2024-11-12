const { PeopleAssign } = require("../controllers/PeopleController");
const router = require("express").Router();

router.post("/people", PeopleAssign);

module.exports = router;
