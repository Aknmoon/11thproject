
// 変数
let unko = "Hello World";

// unko = "Hello World2";

// console.log(unko);

// 定数
const bigEn = "ENHYPEN";

// bigEn = "Hello World2!"
// これはできない↑

// console.log(bigEn);

// 配列
let king = ["one","two","three","four"];

// console.log(king);
// console.log(king[2]);

const andteam = ["one","two","three","four"];

// console.log(andteam[0]);

// loop

// let index = 0;
// while(index < 5){

//   console.log(index);
//   index++;
// }



// let index = 0;
// while(index < andteam.length){

//   console.log(index);
//   index++;
//    ++はプラス1
// }


// let index = 0;
// while(index < andteam.length){

//   console.log(andteam[index]);
//   index++;
//    ++はプラス1
// }


// if / else
// if(andteam.length > 5){
//   console.log("firework");
// }else{
//   console.log("Bite Me");
// }




// 関数
// const test = () =>{
//   if(andteam.length > 5){
//     console.log("firework");
//   }else{
//     console.log("Bite Me");
//   }
// };
// test();

const test = (arg) =>{
  if(andteam.length > arg){
    console.log("firework");
  }else{
    console.log("Bite Me");
  }
};

//  test(3);
//  testの3がargに代入される   argは引数という意味
// test(9);
// test(6);
// test(1);




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
// console.log(blossom.color);
// console.log(blossom.flower());




// console.log(window);
// console.log(window.innerWidth);


// window.alert("Hello World");

// console.log(document);
// console.log(document.getElementsByTagName ('button'));
// console.log(document.getElementsByTagName ('button')[0]);
document.getElementsByTagName ('button')[0].addEventListener("click", ()=> {
  window.alert("Hello World");
});


