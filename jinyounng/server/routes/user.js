const express = require("express");

const {
    userById,
    allUsers,
    getUser,
    updateUser,
    deleteUser,
    userPhoto,
    addFollowing,
    addFollower,
    removeFollowing,
    removeFollower,
    findPeople,
    updateUserRn,
    userlike,
} = require("../controllers/user");
const { requireSignin } = require("../controllers/auth");

const router = express.Router();

router.put("/user/follow", requireSignin, addFollowing, addFollower);
router.put("/user/unfollow", requireSignin, removeFollowing, removeFollower);
router.put("/user/:userId", requireSignin, updateUser);
router.put("/rn/user/:userId", requireSignin, updateUserRn);

router.get("/users", allUsers);
router.get("/user/:userId", requireSignin, getUser);
//photo
router.get("/user/photo/:userId", userPhoto);

// follow suggestions
router.get("/user/findpeople/:userId", requireSignin, findPeople);

router.delete("/user/:userId", requireSignin, deleteUser);

// any route containing :userId, this is execute first
router.param("userId", userById);

module.exports = router;
