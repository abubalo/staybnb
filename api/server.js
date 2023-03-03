require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const imageDownloader = require("image-downloader");
const User = require("./models/User.js");
const Places = require("./models/Places.js");
const multer = require("multer");
const fs = require("fs");
const port = process.env.PORT;

const bcryptSalt = bcrypt.genSaltSync(10);
const jwtSecret = process.env.JWT_SECRET;


mongoose.set("strictQuery", true);
mongoose.connect(process.env.MONGO_URL);

app.use(express.json());
app.use(cookieParser());
app.use("/uploads", express.static(__dirname + "/uploads"));
app.use(
  session({
    secret: "my-secret",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

app.post("/register", async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    const userDoc = await User.create({
      firstName,
      lastName,
      email,
      password: bcrypt.hashSync(password, bcryptSalt),
    });

    res.json(userDoc);
  } catch (err) {
    res.status(422).json(err);
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const userDoc = await User.findOne({ email });
  if (userDoc) {
    const passOk = bcrypt.compareSync(password, userDoc.password);
    if (passOk) {
      jwt.sign(
        { firstName: userDoc.firstName, email: userDoc.email, id: userDoc._id },
        jwtSecret,
        {},
        (err, token) => {
          if (err) throw err;
          res
            .cookie("token", token, {
              httpOnly: true,
              secure: true,
              //   maxAge: 30000,
              sameSite: "strict",
            })
            .json(userDoc);
        }
      );
    } else {
      res.json({ error: "password not found" });
    }
  } else {
    res.status(422).json({ error: "User not found" });
  }
});

// app.get("/logout", (req, res) => {
//   // res.json({message: "You have logout"})

//   if (req.session) {
//     req.session.destroy((err) => {
//       if (err) {
//         res.status(500).json({ message: "Internal server error" });
//       } else {
//         res.clearCookie("token");
//         res.json({ message: "Logout successful" });
//       }
//     });
//   } else {
//     res.json({ message: "Already logged out" });
//   }
// });

app.post("/logout", (req, res) => {
  res.cookie("token", "").json(true);
});

app.get("/profile", (req, res) => {
  const { token } = req.cookies;

  if (token) {
    jwt.verify(token, jwtSecret, {}, async (err, userData) => {
      if (err) throw err;

      const { firstName, lastName, email, _id } = await User.findById(
        userData.id
      );
      res.json({ firstName, lastName, email, _id });
    });
  } else {
    res.json(null);
  }
});

app.post("/upload-by-link", async (req, res) => {
  const { link } = req.body;
  const newName = "photo" + Date.now() + ".jpg";

  await imageDownloader.image({
    url: link,
    dest: __dirname + "/uploads/" + newName,
  });

  res.json(newName);
});

const photoMiddleWare = multer({ dest: "uploads/" });
app.post("/upload", photoMiddleWare.array("photos", 100), (req, res) => {
  const uploadedFiles = [];
  req.files.map((file) => {
    const ext = file.originalname.split(".").pop();
    const path = file.path;
    const newPath = path + "." + ext;
    renamedFiles = fs.renameSync(path, newPath);
    uploadedFiles.push(newPath.replace(/^uploads\\/, ""));
  });

  res.json(uploadedFiles);
});

app.post("/places", async (req, res) => {
  const { token } = req.cookies;
  const {
    title,
    address,
    addedPhotos,
    description,
    perks,
    extraInfo,
    checkIn,
    checkOut,
    maxGuests,
  } = req.body;
  jwt.verify(token, jwtSecret, {}, async (err, userData) => {
    if (err) throw err;

    const PlaceDoc = await Places.create({
      owner: userData.id,
      title,
      address,
      photos: addedPhotos,
      description,
      perks,
      extraInfo,
      checkIn,
      checkOut,
      maxGuests,
    });
    res.json(PlaceDoc);
  });
});

app.get("/places", (req, res) => {
  const { token } = req.cookies;
  jwt.verify(token, jwtSecret, {}, async (err, userData) => {
    if (err) throw err;
    const {id} = userData;
    res.json(await Places.find({owner:id}))
  });
});


app.get("/places/:id", (req, res )=>{
  res.json(req.params)
}) 

app.listen(port);
