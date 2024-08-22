const UserSchema = require("../models/users/userSchema");

async function create(request) {
  try {
    // Crear un nuevo usuario
    const newUser = new UserSchema({
      name: request.body.name,
      email: request.body.email,
    });
    await newUser.save();

    return newUser;
  }
  catch (error) {
    throw new Error(error.message);    
  }
}

async function findByEmail(request) {
  return await UserSchema.findOne({ email: request.params.email });
}

module.exports = {
  create,
  findByEmail
};
