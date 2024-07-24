export const signup = (req,res)=>{
    console.log("signup route");
    res.send("Signup Route");
};

export const login = (req,res)=>{
    console.log("login route")
    res.send("Login Route");
};

export const logout = (req,res)=>{
    console.log("logout")
    res.send("Logout Route");
};