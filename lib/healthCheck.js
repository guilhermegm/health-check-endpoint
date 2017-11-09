const healthCheck = router => response =>
  router.get('/', (req, res) => {
    res.send(Object.assign({}, response));
  });

module.exports = healthCheck;
