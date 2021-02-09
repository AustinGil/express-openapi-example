const router = require('express').Router({mergeParams: true});

router.get('/', (req, res) => {
  return res.json(req.params)
})

module.exports = router;
