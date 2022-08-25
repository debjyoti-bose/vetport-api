const authenticate = async (req, res, next) => {
  try {
    if (!req.session.passport.user.id) {
      throw new Error("Please login to continue");
    }
    if (!req.session || !req.session.passport.user.id) {
      throw new Error("Please login to continue");
    }
    next();
  } catch (err) {
    req?.session?.destroy(function (error) {
      if (req?.cookies?._oid) {
        const store = req.sessionStore;
        store.destroy(req.cookies._oid, function (err) {
          if (err) res.status(401).json("error occurred");
        });
      }
      //Inside a callback… you can write you cleanup functions
      Object.keys(req.cookies).map((_c) => res.clearCookie(_c));
      res.status(401).json("Please login to continue");
    }) ?? res.status(401).json(err.message);
  }
};

module.exports = authenticate;
