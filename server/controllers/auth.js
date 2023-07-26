const User = require('../models/user');
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const bcrypt = require("bcrypt");


exports.signup = (req, res) => {


  User.findOne({ email: req.body.email })
    .exec()
    .then((user) => {
      if (user) {
        return res.status(400).json({
          message: "User already registered."
        });
      }

      const {
        firstName,
        lastName,
        email,
        password
      } = req.body;

      const _user = new User({
        firstName,
        lastName,
        email,
        password,
        username: Math.random().toString()
      });

      return _user.save();
    })
    .then((data) => {
      return res.status(201).json({
        message: "User created successfully."
      });
    })
    .catch((error) => {
      return res.status(400).json({
        message: "Something went wrong."
      });
    });
}

exports.signin = (req, res) => {
  User.findOne({ email: req.body.email })
    .exec()
    .then((user) => {
      if (!user) {
        return res.status(400).json({ message: "Something went wrong." });
      }

      if (user.authenticate(req.body.password)) {
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        const { _id, firstName, lastName, email } = user;

        res.status(200).json({
          token,
          user: { _id, firstName, lastName, email }
        });
      } else {
        return res.status(400).json({ message: "Something went wrong." });
      }
    })
    .catch((error) => {
      return res.status(400).json({ message: "Something went wrong." });
    });
}


// API endpoint to handle password reset request
exports.forgotPassword = async (req, res) => {
  const {email} = req.body;
  User.findOne({email: email})
  .then(user => {
      if(!user) {
          return res.send({Status: "User not existed"})
      } 
      const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: "1h"})
      var transporter = nodemailer.createTransport({
          service: 'gmail',
          port: 465,
          secure: true,
          logger: true,
          debug: true,
          secureConnection:false,
          auth: {
            user: 't98668913@gmail.com',
            pass: 'mllrbygbhbejfeya'
          },
          tls:{
            rejectUnAuthorized: true
          }
        });
        
        var mailOptions = {
          from: 't98668913@gmail.com',    
          to: 't98668913@gmail.com',
          subject: 'Reset Password Link',
          text: `http://localhost:3000/generateNewPassword/${user._id}/${token}`
        };
        
        transporter.sendMail(mailOptions, function(error, info){
          if (error) {
            console.log(error);
          } else {
            return res.send({Status: "Success"})        
          }
        });     
      }) 
};

// API endpoint to handle password reset after clicking the link in the email


exports.resetPassword = async (req, res) => {
  const { id, token } = req.params;
  const { password } = req.body;
 
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(400).json({ Status: "Error with token" });
    } else {
      bcrypt.hash(password, 10)
        .then(hash => {
          // Use the { new: true } option to return the updated user after the update
          User.findByIdAndUpdate(id, { hash_password: hash }, { new: true })
            .then(updatedUser => {
              if (!updatedUser) {
                return res.status(404).json({ Status: "User not found" });
              }
              res.status(200).json({ Status: "Password reset successfully" });
            })
            .catch((err) => res.status(500).json({ Status: "Error updating password", error: err }));
        })
        .catch((err) => res.status(500).json({ Status: "Error hashing password", error: err }));
    }
  });
 }
//  exports.resetPassword = async (req, res) => {
//   const {id, token} = req.params
//     const {password} = req.body

//     jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
//         if(err) {
//             return res.status(400).json({Status: "Error with token"})
//         } else {
//             bcrypt.hash(password, 10) 
//             .then(hash => {
//                 User.findByIdAndUpdate({_id: id}, {password: hash}, {new: true})
//                 .then(() => res.status(200).json({Status: "Password reset successfully"}))
//                 .catch((err) => res.status(500).json({Status:"Error updating password", error:err}))
//             })
//             .catch((err) => res.status(500).json({Status:"Error hasing password", error:err})) 
//         }
//     })
//   const { token, newPassword } = req.body;
//   try {
//     // Verify the token
//     const decodedToken = jwt.verify(token, process.env.JWT_RESET_PASSWORD_SECRET);
//     const userId = decodedToken.userId;

//     // Find the user based on the userId in the token
//     const user = await User.findById(userId);

//     if (!user) {
//       return res.status(404).json({ message: "User not found." });
//     }

//     // Update the user's password with the new password
//     user.hash_password = bcrypt.hashSync(newPassword, 10);
//     await user.save();

//     res.status(200).json({ message: "Password reset successful." });
//   } catch (err) {
//     res.status(400).json({ message: "Invalid or expired token." });
//   }
 








