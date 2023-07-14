import connection from "../configs/connectDB";

// let getHomepage = async (req, res) => {
//   let data = [];
//   connection.query("SELECT * FROM `users` ", function (err, result, fields) {
//     console.log(result);
//     data = result.map((row) => {
//       return row;
//     });

//     //return res.render("index.ejs", { dataUser: data });
//   });
//   const [rows, fields] = await connection.execute("SELECT * FROM `users`");
// };

const getHomepage = async (req, res) => {
  const [rows, fields] = await (
    await connection
  ).execute("SELECT * FROM `users`");
  return res.render("index.ejs", { dataUser: rows });
};

const getDetailpage = async (req, res) => {
  const userId = req.params;
  const [user, fields] = await (
    await connection
  ).execute("SELECT * FROM `users` WHERE `id` = ?", [userId]);

  // let user = await connection.execute(`SELECT * FROM users WHERE id = ? `, [
  //   userId,
  // ]);
  return res.send(JSON.stringify(user));
  //res.json(userId);
};

module.exports = {
  getHomepage,
  getDetailpage,
};
