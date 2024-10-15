import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
    default: "EGEO",
  },
  about: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
    default: "Web developer",
  },
  avatar: {
    type: String,
    required: true,
    minlength: 8,
    default:
      "https://practicum-content.s3.us-west-1.amazonaws.com/resources/moved_avatar_1604080799.jpg",
    validate: {
      validator: function (v) {
        const regExValidate = /(https?\:\/\/\S)(\.[a-z]{2,}\#?)/;
        if (regExValidate.test(v)) {
          return true;
        }
      },
      message: (props) => `${props.value} es un URL invalido`,
    },
  },
});

const User = mongoose.model("user", userSchema);

export default User;
