let text = "Thien123\b"
let text1 = "thien123\f"
var myString = "Hello\bWorld";
console.log(myString);
// Everything without a "Value" is false
let x = 0 // Boolean(x) == false
let y = "" // Boolean(y) == false
let z // Boolean(z) == false
let o = null // Boolean(o) == false
let i = 10 / "Hallo" // Boolean(x) == false
// false == new Boolean(false) sử dụng dấu == thì bằng 
// false === new Boolean(false) sử dụng dấu === thì không bằng 
// So sánh 2 đối tượng trong JavaScript luôn luôn trả về false
// x !== 5 false 
// x !== "5" true
// x !== 8 true
// x != 8 true
// > false
// < true
// >= false
// <= true 
// && true example: (x < 10 && y > 1) 
// || false example:(x == 5 || y == 5)
// ! true example: !(x == y)
// Toán tử ?? trả về first argument nếu cả 2 không có cái nào null hoặc undefined nếu null thì trả về cái còn lại
// Toán tử ?. trả về undefined nếu object là undefined or null 
const car = {type:"Fiat", model:"500", color:"white"};
let name = car?.model; // return 500
let name1 = car?.name ; // return undefined 
