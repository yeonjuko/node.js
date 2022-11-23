const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser"); //post 요청시 body 파싱을 위해 추가
router.use(bodyParser.urlencoded({ extended: true }));
// 특정 요청 시
// index.html 응답 + 특정 데이터(html에서 출력되도록)
// loginForm.html 렌더링
router.get("/loginForm", (req, res) => {
  //render 호출 시
  //보내는 값 {} : 넌적스가 처리함
  //index : index.html을 렌더링하여 보내겠다!
  res.render("loginForm");
});

router.post("/login", (req, res) => {
  if (req.body.pw == "1234") {
    res.render("loginSucess", { id: req.body.id });
  } else {
    res.render("loginFail");
  }
});

module.exports = router;
