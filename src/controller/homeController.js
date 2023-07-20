let getHomePage = (req, res) => {
  res.render('homePage');
};

let getAboutPage = (req, res) => {
  res.render('./test/about');
};

export default { getHomePage, getAboutPage };
