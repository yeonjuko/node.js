const { clear } = require("console");

//setTimeout : n초후 실행
setTimeout(() => {
  console.log("1.5초 후 실행");
}, 1500);

//setInterval : n초마다 실행
const interval = setInterval(() => {
  console.log("1초마다 실행");
}, 1000);

const timeout2 = setTimeout(() => {
  console.log("실행되지 않습니다");
}, 3000);

setTimeout(() => {
  clearTimeout(timeout2); // 생성한 timeout 삭제
  clearInterval(interval); // 생성한 interval 삭제
}, 2500);

// setTimeout을 0초로 설정하기보다는 바로 실행
const immediate = setImmediate(() => {
  console.log("즉시 실행");
});

clearImmediate(immediate); // 생성한 immediate 삭제
