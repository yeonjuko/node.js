const express = require("express");
const router = express.Router();

// 주소 : http://localhost:8888/s/setsession
//세션 생성하기
router.get("/setsession", (req, res) => {
  req.session.nickname = "닉네임";
  req.session.today = "today";
  res.send("세션생성");
});

// 주소 : http://localhost:8888/s/getsession
//세션에 저장된 값을 응답하기
router.get("/getsession", (req, res) => {
  res.send("닉네임 : " + req.session.nickname);
});

router.get("/deletesession", (req, res) => {
  req.session.destroy(); //전체 삭제
  //req.session.today = ""; 하나만 삭제
  res.send("세션삭제");
});
// 많은 사용자들을 관리하기 위한 세션 저장소 필요 : 스토리지

module.exports = router;
