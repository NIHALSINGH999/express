const express = require('express');
const {add,update,deleteUser,show} = require('../controller/controller.js');

const router  = express.Router();

router.get("/info",show);
router.post("/add",add);
router.patch("/update",update);
router.delete("/delete",deleteUser);

module.exports = router
