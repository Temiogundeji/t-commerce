module.exports = (func) => (req, res, next) => {
    func(req, res, next).catch((err) => {
      req.log.warn(err);
      next(err);
    });
  };
  