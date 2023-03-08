const userModel = require("../model/user")


exports.loginUser = async(req,res)=>{
 try {



        const { email, password } = req.body;
      
        // Check if user exists
        const user = await userModel.findOne({ email });
        if (!user) {
          return res.status(400).json({ message: 'Invalid credentials' });
        }      
      
        // Generate token
        const token = jwt.sign({ id: user._id }, 'secret');
      
        res.status(200).json({ token });
      
    
 } catch (error) {

    console.log(error)
    
 }
}

