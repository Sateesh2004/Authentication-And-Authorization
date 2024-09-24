import User from '../models/user.model.js';
import bcrypt from 'bcryptjs'
import token from '../jwt/token.js';
const registerUser = async (req, res) => {
    try {

        const { username, email, password, passwordconfirmation } = req.body
        if (password !== passwordconfirmation) {
            return res.status(400).json({ message: "Password do not match" })
        }
        const user = await User.findOne({ username });

        const emailaddress = await User.findOne({ email });

        if (user) {
            return res.status(400).json({ message: "User already exist" })
        }
        if (emailaddress) {
            return res.status(400).json({ message: "Email already exist" })
        }



        const hashedpassword = await bcrypt.hash(password, 8,);
        const newUser = new User({
            username, email, password: hashedpassword
        })

        await newUser.save()
        if (newUser) {
            res.status(201).json({ message: "User created succesfully" })
        }
    }
    catch (error) {
        res.status(401).json({ message: "Error Occured" })
    }

}





const signin = async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: "Username and password are required." });
    }

    try {

        const user = await User.findOne({ username });

        if (!user) {
            return res.status(401).json({ message: "Invalid username or password." });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({ message: "Invalid username or password." });
        }
        console.log(user)
        
        console.log(user._id)
        token(user.username, res)
        return res.status(200).json({ message: "User authenticated successfully.",
            username: user.username,
         });
    } catch (error) {
        console.error("Error during sign-in:", error);
        return res.status(500).json({ message: "Internal server error." });
    }
};


const logout = async (req, res) => {
    // Clear the JWT cookie
    console.log("delet token")
    res.cookie("jwt","", {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',  
        sameSite: "strict",
        path: '/', 
      });
  
    // Redirect to the sign-in page
    
    return res.status(201).json({ message: "Out" });
  };
  






export { registerUser, signin,logout };
