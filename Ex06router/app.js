//app.js : node module 로딩, 초기화, router 유입점
const express = require("express");
const indexRouter = require("./routes"); //index.js는 생략(기본)
//즉 "./routes/index"로 쓰지 않아도 된다는 뜻
const userRouter = require("./routes/user");
const app = express();

//app.set('key', value) : 키에 값을 저장하도록 설정
app.set("port", process.env.PORT || 8888);

app.use("/", indexRouter);
app.use("/user", userRouter);

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 서버 연결 대기중..");
});
