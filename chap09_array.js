// Array()が持つプロパティとメソッド
// インスタンスプロパティ
//     ・constructor
//     ・length
// インスタンスメソッド
//     ・toString:
//     ・toLocaleString:
//     ・join:
//     ・concat:
//     ・pop:
//     ・push:
//     ・reverse:
//     ・shift:
//     ・unshift:
//     ・slice:
//     ・sort:
//     ・splice:


//------------------------------------------------


//Arrayコンストラクタの挙動に注意

//Arrayコンストラクタは、引数を1つだけ渡した場合、引数の値を配列の長さと解釈する
var myArray = new Array(100);
console.log(myArray[0], myArray.length);//undefined, 100

//Arrayインスタンスは、リテラル記法で生成するのが無難
var myArray = [100];
console.log(myArray[0], myArray.length);//100,1


//------------------------------------------------


//lengthプロパティの挙動に要注意！！！！！
//このプロパティを更新すると、配列内部の挙動にまで影響が及びます...

var myArray = [1, 2, 3, 4];
myArray.length = 100;
console.log(myArray[4]);    //undefined(4-99までは要素が存在しなかったので、undefinedで埋められる)

myArray.length = 1;
console.log(myArray[1]);    //undefined(要素が削除されちゃう.....)



//------------------------------------------------


//keyに数値を指定する場合は要注意！(lengthが変わってしまうことが...)

var myArray = [1, 2, 3, 4];
myArray[49] = 50;
console.log(myArray.length); //50になる


//------------------------------------------------

//Arrayインスタンスをループする場合、必ずlengthプロパティをコピーすること！

var myArray = ['white', 'gray', 'black'];
var tmpLength = myArray.length;//必ずコピーする！
var counter = 0;

while(counter < tmpLength){
    console.log(myArray[counter]);
    counter++;
}
counter = null;    //使い終わった変数の後始末も忘れずに
tmpLength = null;
