const express = require('express');
const { getUsers, getUserById, signupUser, updateUser, deleteUser, loginUser } = require('../controllers/userController');

const router = express.Router();


router.get('/', (req, res) => {
    res.send('this is a user mnagement api');
});

router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.post('/signup', signupUser);
router.put('/users/:id', updateUser)
router.delete('/users/:id', deleteUser)
router.put('/login', loginUser)


module.exports = {
    router
}

