import express from "express";
import User from "../models/user.model.js";

const router=express.Router();

router.post('/',async(req,res)=>{
     console.log("📩 Received data:", req.body); 
    try{
        const user=new User(req.body);
        await user.save();
        console.log("✅ User saved:", user);
        res.json(user);

    }
    catch(error){
        res.status(400).json({message:error.message});

    }
})

router.put("/:id", async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true, // return updated user
    });
    res.json(updatedUser);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: "User deleted successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


router.get("/", async (req, res) => {
    
  const users = await User.find();
  res.json(users);
});
export default router;