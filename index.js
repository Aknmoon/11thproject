
// 変数
let unko = "Hello World";

// unko = "Hello World2";

// 定数
const bigEn = "ENHYPEN";

// bigEn = "Hello World2!"

const andteam = ["one","two","three","four"];

// console.log(andteam[0]);

// loop
// let index = 0;
// while(index < andteam.length){

//   console.log(andteam[index]);
//   index++;
  // ++はプラス1
// }


// if / else
// if(andteam.length > 5){
//   console.log("firework");
// }else{
//   console.log("Bite Me");
// }

// 関数
const test = (arg) =>{
  if(andteam.length > arg){
    console.log("firework");
  }else{
    console.log("Bite Me");
  }
};

// test(6);


// object
const blossom = {
  color: "pink",
  size: "large",
  purfume: "mint",
  flower: () => {
    console.log("Hello");
  }
};

// console.log(blossom);

// console.log(window.innerWidth);
// window.alert("Hello World");

// console.log(document);
// console.log(document.getElementsByTagName ('button')[0]);
document.getElementsByTagName ('button')[0].addEventListener("click", ()=> {
  window.alert("Hello World");
});


