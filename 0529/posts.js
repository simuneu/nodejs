const express= require('express')
const router = express.Router();

const posts = require("./post")

router.get("/", (req, res)=>{
	res.send([
		{
		"id": 1,
		"userId": 2,
		"title": "첫 번째 글",
		"content": "안녕하세요 게시판입니다.",
		"createdAt": "2024-05-29T10:00:00Z"
		},
		{
		"id": 2,
		"userId": 1,
		"title": "두 번째 글",
		"content": "Express 연습 중입니다.",
		"createdAt": "2024-05-29T12:00:00Z"
		}
	])
})
router.get("/:id", (req, res)=>{
	res.send({
		"id": 1,
		"userId": 2,
		"title": "첫 번째 글",
		"content": "안녕하세요 게시판입니다.",
		"createdAt": "2024-05-29T10:00:00Z"
		})
})

router.post("/", (req, res)=>{
	const {userId, title, content}=req.body;
	const newPost={
		"id":posts.length+1,
		"userId":userId, 
		"title":title, 
		"content":content, 
		"createdAt": new Date().toISOString() 
	}
	posts.push(newPost)
	res.send(newPost);
})

router.put("/:id", (req, res)=>{
	const id =Number(req.params.id);
	const {title, content}=req.body;
	const post = posts.find(p=>p.id===id)
	if(!post){
		return res.send({"error":"수정실패"})
	}

	if(title) post.title = title;
	if(content) post.content = content;
	post.updatedAt= new Date().toISOString();
	res.send(post)
})

router.delete("/:id", (req, res)=>{
	const id =Number(req.params.id);
	console.log("삭제 게시물"+id)
	const index=posts.findIndex(post=>post.id === id)
	if(index !== -1){
		posts.splice(index, 1)
		res.send({
			"message": "게시글이 성공적으로 삭제되었습니다."
		})
	}else{
		res.send({
			"error":"삭제 실패"
		})
	}
})

module.exports = router