const express = require("express");
const router = express.Router();

// 쿠키 설정하기 : 1,2 중 하나 선택해서 사용하면 됨
router.get("/setcookie", (req, res) => {
  let nickname = "pingu";
  // 1.
  res.cookie("nickname", nickname, {
    maxAge: 100000000, // 밀리초 단위(만료 시간)
  });
  // 2.
  res.cookie("dinner", "치킨", {
    expires: new Date(Date.now() + 60 * 60 * 24 * 1000 * 2),
  });

  res.send("쿠키생성");
});

// 쿠키 확인하기
router.get("/getcookies", (req, res) => {
  console.log(req.cookies.dinner);
  console.log(req.cookies);
  res.send(req.cookies);
});

// 쿠키 삭제
router.get("/deletecookie", (req, res) => {
  res.clearCookie("dinner");
  res.send("쿠키삭제");
});

module.exports = router;
