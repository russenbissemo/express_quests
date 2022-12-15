// const Joi = require("joi");

// const movieSchema = Joi.object({
//   title: Joi.string().max(255).required(),
//   director: Joi.string().max(255).required(),
//   year: Joi.string().max(255).required(),
//   color: Joi.boolean().required(),
//   duration: Joi.number().max(255).required(),
// });

// const validateMovie = (req, res, next) => {
//   const { title, director, year, color, duration } = req.body;
//   console.log(title);
//   const { error } = movieSchema.validate(
//     { title, director, year, color, duration },
//     { abortEarly: false }
//   );

//   if (error) {
//     console.log(error);

//     res.status(422).json({ validationErrors: error.details });
//   } else {
//     console.log("validate movie");
//     next();
//   }
// };

const userSchema = Joi.object({
  email: Joi.string().email().max(255).required(),
  firstname: Joi.string().max(255).required(),
  lastname: Joi.string().max(255).required(),
});

const validateUser = (req, res, next) => {
  const { email, firstname, lastname } = req.body;

  const { error } = userSchema.validate(
    { email, firstname, lastname },
    { abortEarly: false }
  );

  if (error) {
    res.status(422).json({ validationErrors: error.details });
  } else {
    next();
  }
};

module.exports = {
  validateMovie,
  validateUser,
};
