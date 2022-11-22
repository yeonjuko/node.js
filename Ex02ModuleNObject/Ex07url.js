const { URL } = require("url");
// url 생성자 활용

const myURL = new URL(
  "https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=%EC%9B%94%EB%93%9C%EC%BB%B5+%EC%9D%BC%EC%A0%95"
);

console.log("searchParams : ", myURL.searchParams); //url의 전체 쿼리 확인
console.log("searchParams.get() : ", myURL.searchParams.get("query")); //특정 키의 값
//colors=red,blue,orange
//getAll() : 값이 여러개일 경우 전부 가져오기
console.log("searchParams.has() : ", myURL.searchParams.has("page")); //특정 키를 가지고 있는지 확인(true/false)
console.log("searchParams.keys() : ", myURL.searchParams.keys()); //쿼리의 모든 키값
console.log("searchParams.values() : ", myURL.searchParams.values()); //쿼리의 모든 value값

myURL.searchParams.append("key", "value1");
myURL.searchParams.append("key", "value2");
console.log(myURL.searchParams.getAll("key")); //value1, value2

myURL.searchParams.set("key", "value3");
console.log(myURL.searchParams.getAll("key")); //value3

myURL.searchParams.delete("key");
console.log(myURL.searchParams.getAll("key"));

console.log("searchParams.toString() : ", myURL.searchParams.toString());
myURL.search = myURL.searchParams.toString();
