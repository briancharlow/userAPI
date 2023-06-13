const users = require('../data');


module.exports = {
    getUsers: (req, res) => {

        res.json(
            {
                success: true,
                message: "users retrieved succesfuly",
                data: users
            }
        )
    },
    getUserById: (req, res) => {
        const { id } = req.params;
        const userId = users.findIndex(user => user.id.toString() == id);
        if (userId == -1) {
            return res.status(404).json({
                success: false,
                message: "user not found",
            })
        }

        res.json({
            success: true,
            message: "user retrieved succesfuly",
            results: users[userId]
        }
        )
    },
    signupUser: (req, res) => {
        const { name, age, email } = req.body;
        const id = users.length + 1;
        const newUser = {
            id,
            name,
            age,
            email
        }
        users.push(newUser);
        res.status(201).json({
            success: true,
            message: "signed up succesfuly",
            results: newUser
        }
        )
    },
    updateUser: (req, res) => {
        const { id } = req.params;
        const userId = users.findIndex(user => user.id.toString() == id);
        if (userId == -1) {
            return res.status(404).json({
                success: false,
                message: "user not found",
            })
        }
        const { name, age, email } = req.body;
        if (name) {
            users[userId].name = name;
        }
        if (age) {
            users[userId].age = age;
        }
        if (email) {
            users[userId].email = email;
        }
        const updatedUser = users[userId];
        res.json({
            success: true,
            message: "user updated succesfuly",
            results: updatedUser
        }
        )
    },
    deleteUser: (req, res) => {
        const { id } = req.params;
        const userId = users.findIndex(user => user.id.toString() == id);
        if (userId == -1) {
            return res.status(404).json({
                success: false,
                message: "user not found",
            })
        }
        users.splice(userId, 1);
        res.json({
            success: true,
            message: "user deleted succesfuly",
            results: users
        }
        )
    },
    loginUser: (req, res) => {
        const { email, password } = req.body;
        const user = users.find(user => user.email == email);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "user not found",
            })
        }
        if (user.password !== password) {
            return res.status(401).json({
                success: false,
                message: "incorrect password",
            })
        }
        res.json({
            success: true,
            message: "user logged in succesfuly",
            results: user
        }
        )
    }
}
