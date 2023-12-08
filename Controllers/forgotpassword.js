const Usermodel = require("../Models/usemodel");
const HandleForgetPassword = async (req, res) => {
  const { password, email } = req.body;
  try {
    const user = await Usermodel.findOne({ email: email });

    if (user) {
      Usermodel.findByIdAndUpdate(user.id, { password: password })
        .then(() =>
          res.status(200).json({ meassage: "Successfully updated password" })
        )
        .catch((err) => console.log(err));
    } else {
      res.json({ mesage: "no user found" });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { HandleForgetPassword };
