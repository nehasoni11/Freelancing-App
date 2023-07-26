const express = require("express");
const { signup, signin, forgotPassword, resetPassword } = require("../controllers/auth");
// const { validateSignupRequest, isRequestValidated, validateSigninRequest } = require("../validators/auth");
const router = express.Router();


router.post('/sign-up', signup);
router.post('/sign-in', signin);

router.post('/forgot-password', forgotPassword);
router.post('/reset-password/:id/:token', resetPassword);


module.exports = router;