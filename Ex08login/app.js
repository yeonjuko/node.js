const express = require("express");
const nunjucks = require("nunjucks"); //넌적스 템플릿 엔진 사용
const loginRouter = require("./routes/login");
const app = express();

// 실행시 http://localhost:8888/user/loginForm 주소로 실행

app.set("port", process.env.PORT || 8888);
app.set("view engine", "html"); //넌적스 = njk / html

app.use("/user", loginRouter);
//npm install nunjucks
//npm install nunjucks chokidar
nunjucks.configure("views", {
  express: app, //app 객체 연결
  watch: true, //html 파일이 연결되면 템플릿 엔진을 다시 랜더링
});

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 서버 연결 대기중..");
});
