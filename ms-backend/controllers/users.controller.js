const User = require("../model/userSchema");
const Media = require("../model/mediaSchema");
const bcrypt = require('bcrypt');

exports.register = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(404).json({ error: "Fill all fields carefully" });
    }

    

    User.findOne({ email: email }).then((userexist) => {
      
      if (userexist) {
        return res.status(422).json({ error: "User Exist" });
      }
      
      const user = new User({email,password});
      
      user.save().then(()=>{
      
      res.status(201).json({message:'User Regitered Successfully'})
    }).catch((err)=> res.status(500).json({error:'Failed to register'}));

    });

    
    
  } catch (error) {
    next(error);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(404).json({ error: "Fill all fields carefully" });
    }

    const userExist = await User.findOne({ email: email });
    if (userExist) {
      const matchUser = bcrypt.compareSync(password,userExist.password);
      
      if (!matchUser) {
        return res.status(400).json({ error: "Invalid Credentials" });
      }else{
        return res.status(200).json({ message: "Login Successfully" });
      }
    } else {
      return res.status(403).json({ error: "Invalid Email" });
    }
    
  } catch (error) {
    next(error);
  }
};


// exports.register = async (req, res, next) => {
//   try {
//     const { email, password } = req.body;
//     if (!email || !password) {
//       return res.status(404).json({ error: "Fill all fields carefully" });
//     }
//   } catch (error) {
//     next(error);
//   }
// };
  

    exports.allmovies = async (req, res, next) => {
      try {
        const data = await Media.find({type:'movie'});
        res.json(data);
      } catch (error) {
        res.status(500).json({ message: "Data Not Found" });
      }
    };

    exports.allseries = async (req, res, next) => {
      try {
        const data = await Media.find({type:'series'});
        res.json(data);
      } catch (error) {
        res.status(500).json({ message: "Data Not Found" });
      }
    };

