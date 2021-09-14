app.post("/register", async (req, res) => {

   
    try {
      
      const { username, email, password } = req.body;
  
      if (!(email && password && surname)) {
        res.status(400).send("All input is required");
      }
  
      
      const oldUser = await User.findOne({ email });
  
      if (oldUser) {
        return res.status(409).send("User Already Exist. Please Login");
      }
  
     
      encryptedPassword = await bcrypt.hash(password, 10);
  
    
      const user = await User.create({
        username,
        email: email.toLowerCase(), 
        password: encryptedPassword,
      });
  
      // Create token
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      );
      
      user.token = token;
  
      // return new user
      res.status(201).json(user);
    } catch (err) {
      console.log(err);
    }
   
  });