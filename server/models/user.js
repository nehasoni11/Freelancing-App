const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
        min: 3,
        max: 30
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        min: 3,
        max: 30
    },
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        index: true,
        lowercase: true

    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true
    },
    hash_password: {
        type: String,
        required: true
    }

}, { timestamps: true });

userSchema.virtual('password')
   .set(function (password) {
       this._password = password; // Store the plain text password temporarily
       this.hash_password = bcrypt.hashSync(password, 10); // Hash the password and store it
   })
   .get(function () {
       return this._password; // Return the plain text password when needed (for validation, etc.)
   });

// userSchema.virtual('password')
//     .set(function (password) {
//         this.hash_password = bcrypt.hashSync(password, 10);
//     })

userSchema.virtual('fullName')
    .get(function () {
        return `${this.firstName} ${this.lastName}`;
    })

userSchema.methods = {
    authenticate: function (password) {
        return bcrypt.compareSync(password, this.hash_password);
    }
}

module.exports = mongoose.model("User", userSchema);  