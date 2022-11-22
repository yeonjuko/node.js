const fs = require("fs").promises;

fs.writeFile("./writeme.txt", "새로 만든 파일!")
  .then(() => {
    //파일 생성이 성공하면
    return fs.readFile("./writeme.txt");
  })
  .then((data) => {
    //파일 리턴 성공
    console.log(data.toString());
  })
  .catch((err) => {
    console.log(err);
  });
