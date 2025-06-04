const {getDbCustomers ,getDbComments} = require('../model/comment');

exports.getMain= async(req, res)=>{
  res.render("index.ejs", {
    data: await getDbCustomers(),
  })
};
exports.postMain= (req, res)=>{
  res.send("post!")
};
exports.getId = (req, res)=>{
  const {id}=req.params;
  res.render("paramIndex.ejs",{
    id, 
    data: getDbComments()
  })
};

