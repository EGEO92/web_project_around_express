import User from "../models/user.js";

export async function getUsers(req, res) {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (err) {
    return res
      .status(500)
      .send({ message: "Ups! Aun no estamos listos...creo" });
  }
}

export async function getUserById(req, res) {
  try {
    const { _id } = req.params;
    const user = await User.findById(_id).orFail();
    return res.send(user);
  } catch (err) {
    if (err.name === "CastError") {
      return res.status(400).send({ message: "Algo esta mal..." });
    }
    if (err.name === "DocumentNotFound") {
      return res.status(404).send({ message: "No encontrado o no existe" });
    }
    return res
      .status(500)
      .send({ message: "Error del serv....^#&#*&#@....idor....*@#$%^HELP" });
  }
}

export async function createUser(req, res) {
  try {
    const { name, about, avatar } = req.body;
    const newUser = await User.create({ name, about, avatar });
    res.send(newUser);
  } catch (err) {
    if (err.name === "ValidatorError") {
      res.status(400).sen({ message: "AJAM!! Revisa bien tus datos" });
    }
    return res
      .status(500)
      .send({ message: "Er....^#*$%...or..&#*&#@....idor....*@#$%^HELP" });
  }
}

export async function updateUser(req, res) {
  try {
    const { name, about } = req.body;
    const updatedUser = await User.findByIdAndUpdate(
      req.user._id,
      { name, about },
      { new: true }
    ).orFail();
    return res.send(updatedUser);
  } catch (err) {
    if (err === "CastError") {
      return res
        .status(400)
        .send({ message: "Algo no se hizo correctamente, revisa los datos" });
    }
    if (err === "DocumentNotFound") {
      return res
        .status(404)
        .send({ message: "Usuario inexistente o no has logeado" });
    }
    return res
      .status(500)
      .send({ message: "Error del serv....^#&#*&#@....idor....*@#$%^HELP" });
  }
}

export async function updateAvatar(req, res) {
  try {
    const { avatar } = req.body;
    const newAvatar = User.findByIdAndUpdate(
      req.user._id,
      { avatar },
      { new: true }
    ).orFail();
    return res.send(newAvatar);
  } catch (err) {
    if (err === "CastError") {
      return res
        .status(400)
        .send({ message: "Algo no se hizo correctamente, revisa los datos" });
    }
    if (err === "DocumentNotFound") {
      return res
        .status(404)
        .send({ message: "Usuario inexistente o no has logeado" });
    }
    return res
      .status(500)
      .send({ message: "Error del serv....^#&#*&#@....idor....*@#$%^HELP" });
  }
}
