let n1 = 1;
let d1 = 1.5;
let b1 = true;
let c1 = "소주";
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, "숫자"]; // let a = []; // 다 소문자, 아님 커멜표기법
let user = { //오브젝트//자바로 클래스
    id: 1,
    username: "ssar",
    email: "ssar@nate.com",
    hobby: ["농구", "축구"],
    account: {
        id: 1122,
        password: 8087,
        balance: 50000
    }
};
console.log("n1 : " + n1);
console.log("n1 : ", n1);
console.log(`n1값은 ${n1} 입니다`);

console.log("d1:", d1);
console.log(`d1값은 ${d1} 입니다`);

console.log("b1:", b1);
console.log(`b1값은 ${b1} 입니다`);

console.log("c1:", c1);
console.log(`c1값은 ${c1} 입니다`);

console.log("arr[0]:", arr[0]);
console.log(`arr[1]값은 ${arr[1]} 입니다`);

console.log("user.id:", user.id);
console.log("user.usrname:", user.username);
console.log("user.email:", user.email);
console.log("user.hobby[0]:", user.hobby[0]);
console.log(`user.id 값은 ${user.id}`);
console.log(`user.username, ${user.username}`);
console.log(`user.email, ${user.email}`);
console.log(`user.email, ${user.account.id}`);