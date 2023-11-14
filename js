const home = async(req,res)=>{

    try{

        res.status(200).send("Welcome to MERN");

    } catch(error){
        console.log(error);
    }

}; 

const register = async (req,res)=>{
    try{

        res.status(200).send("Welcome to registration page (controllers)");

    } catch(error){
        res.status(400).send({msg:"Page not found"})
    }
  
};

module.exports = {home,register};
