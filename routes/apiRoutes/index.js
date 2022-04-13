const router = require('express').Router();

const animalRoutes = require('../apiRoutes/animalRoutes');
const zookeeperRoutes = require('../apiRoutes/zookeeperRoutes');

router.use(animalRoutes);
router.use(zookeeperRoutes);
// Can also write out code as router.use(require('./zookeeperRoutes'));

module.exports = router;