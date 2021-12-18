const router = require("express").Router();
const User = require("../models/User.model");
const bcrypt = require("bcryptjs");

router.get("/list", (req, res, next) => {
  User.find(req.params.id)
    .then((data) => res.status(200).json(data))
    .catch((err) => next(err));
});


// signup route
router.post("/signup", (req, res, next) => {
  const { username, email, password } = req.body//;
  // verify sent info
  if (!username || !email || !password) {
    return res.status(400).json({
      errorMessage:
        "Necesitas poner un usuario, email y password para el sign up!",
    });
  }

  // email BE validation
  const mailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!mailRegex.test(email)) {
    return res.status(400).json({
      errorMessage:
        "Woohoo! Parece que el email es incorrecto. Por favor, escribe un tipo de email correcto!",
    });
  }

  // password length
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  if (!passwordRegex.test(password)) {
    return res.status(400).json({
      errorMessage:
        "Oooo tu password necesita tener, al menos, 8 carácteres de largo, mayúsculas y minúsculas!",
    });
  }

  // check if username is taken
  User.findOne({ username: username }).then((user) => {
    if (user) {
      return res.status(400).json({
        errorMessage:
          "Hola! Este usuario no está disponible. Seguro que encuentras otro nombre que te gusta!",
      });
    }
    // encrypt password
    const saltRounds = 10;
    bcrypt
      .genSalt(saltRounds)
      .then((salt) => bcrypt.hash(password, salt))
      .then((hashedPassword) => {
        // create user
        return User.create({ username, password: hashedPassword, email });
      })
      .then((user) => {
       return res.status(201).json(user);
      })
      .catch((error) => {
        return res.status(400).json({
          errorMessage: `Ha habido un problema al crear el usuario, ${error.message}`,
        });
      });
  });
});

// login
router.post("/login", (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({
      errorMessage: `Puede que hayas olvidado poner tu ${
        username ? "password" : "username"}?`,
    });
  }

  User.findOne({ username })
    .then((user) => {
      if (!user) {
        return res.status(400).json({
          errorMessage:
            "Tienes una cuenta? Asegúrate de estar escribiendo el usuario de forma correcta :-D!",
        });
      }
      bcrypt.compare(password, user.password).then((isSamePassword) => {
        if (!isSamePassword) {
          return res.status(400).json({
            errorMessage: "Password incorrecto, prueba otra vez",
          });
        }
        return res.json({ user });
      });
    })
    .catch((err) => {
      next(err);
    });
});

//detailed profile (=> private)
router.get("/:id", (req, res, next) => {
  User.findById(req.params.id)
    .then((data) => res.status(200).json(data))
    .catch((err) => next(err));
});

//edit profile
router.patch("/:id", (req, res, next) => {
  console.log("something");
  const { username, email, fullName, age} =
    req.body;
  User.findByIdAndUpdate(
    req.params.id,
    {
      username,
      email,
      fullName,
      age,
    },
    { new: true }
  )
    .then((data) => res.json(data))
    .catch((err) => {
      console.log(err);
      next(err);
    });
});

//delete profile
router.delete("/:id", (req, res, next) => {
  User.findByIdAndDelete(req.params.id)
    .then((data) => res.json(data._id))
    .catch((err) => next(err));
});

router.get('/list', (req, res, next) => {
  res.setHeader('Content-Type', 'application/json');
  User.find((err, data) => {
    if (err){
      console.log("error")
      res.status(400);
      res.end(JSON.stringify({message: "No users"}))
    } else {
      res.end(JSON.stringify(data));
    }
  })
});

module.exports = router;