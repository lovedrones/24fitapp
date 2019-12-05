
module.exports = {
  index,
};

function index(req, res, next) {
  res.render('index', {
      title: '24FIT ME Menu'
    });
  }
