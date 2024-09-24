import jwt from "jsonwebtoken"
const token = (username, res) => {
    const token = jwt.sign({ username }, process.env.SECRET_KEY, { expiresIn: "10d" });
    
    console.log("Hello setting cookie")
    res.cookie("jwt", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',  
      sameSite: "strict",
      path: '/', 
    });
  };
  export default token