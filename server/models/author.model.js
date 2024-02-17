const mongoose = require("mongoose");
const AuthorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Author name is mandatory"],
      minLenght: [3, "Author name must have at least 3 characters"],
    },
  },
  { timestamps: true, versionKey: false }
);

const Author = new mongoose.model("Author", AuthorSchema);

module.exports = Author;
