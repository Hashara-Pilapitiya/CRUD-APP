const User = require("../model/userModel.js");


//create a user
const create = async (req, res) => {   
    try {
        const newUser = new User(req.body);
        const {email} = newUser;

        const userExist = await User.findOne({ email });
        if (userExist) {
            return res.status(400).json({ message: "User already exists." });
        }
        const savedData = await newUser.save(); 
        res.status(200).json({ message: "User created successfully."});

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}



//get all users
const getAll = async (req, res) => {
    try {
        const users = await User.find();
        if (!users || users.length === 0){
            return res.status(404).json({ message: "No user found." });
        }
        res.status(200).json(users);
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}



//get user by id
const getById = async (req, res) => {
    try {
        const userExist = await User.findById(req.params.id);
        if (!userExist){
            return res.status(404).json({ message: "User not found." });
        }
        res.status(200).json(userExist);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


//update user by id
const update = async (req, res) => {
    try {
        const userExist = await User.findById(req.params.id);
        if (!userExist){
            return res.status(404).json({ message: "User not found." });
        }
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(200).json(updatedUser);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


//delete user by id
const deleteById = async (req, res) => {
    try {
        const userExist = await User.findById(req.params.id);
        if (!userExist){
            return res.status(404).json({ message: "User not found." });
        }
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "User deleted successfully." });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = 
{   create,
    getAll,
    getById,
    update,
    deleteById
};