const User = require('../models/user');

module.exports = {
  index,
};

function index(req, res, next) {
  
  let sortKey = req.query.sort || 'name';
  User.find(modelQuery)
  .sort(sortKey).exec(function(err, users) {
    if (err) return next(err);
    // Passing search values, name & sortKey, for use in the EJS
    res.render('/', {
      users,
      user: req.user,
      name: req.query.name,
      sortKey
    });
  });
}