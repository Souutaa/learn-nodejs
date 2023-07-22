import db from '../models/index';

let getHomePage = async (req, res) => {
  try {
    let data = await db.User.findAll();

    res.render('homePage', {
      data: JSON.stringify(data),
    });
  } catch (error) {
    console.log('error: ', error);
  }
};

let getAboutPage = (req, res) => {
  res.render('./test/about');
};

export default { getHomePage, getAboutPage };
