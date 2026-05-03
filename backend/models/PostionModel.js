const { model }=require("mongoose");
const {PostionSchema}=require("../schemas/PostionSchema");
const PostionModel=new model("Position",PostionSchema);
module.exports={ PostionModel };