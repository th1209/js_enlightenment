//prototypeからプロパティを継承するインスタンスは、常に最新の値を取得する

//以下のように、インスタンスは、オブジェクト(雛形インスタンス)のprototypeを参照し続ける
var Obj = function Obj(){};
Obj.prototype.x = 1;

var instance = new Obj();
console.log(instance.x);    //1
console.log(instance.y);    //undefined

Obj.prototype.x = 2;
Obj.prototype.y = 3;
console.log(instance.x);    //2
console.log(instance.y);    //3

Obj.prototype.x = undefined;
console.log(instance.x);    //undefined


//------------------------------------------------


//全てのインスタンスは、インスタンス生成時点のprototypeを参照し続ける

var Obj = function Obj(){};
Obj.prototype.x = 1;

var instanceOne = new Obj();
console.log(instanceOne.x); //1

Obj.prototype = {x: 2};		//この時点で、prototypeプロパティの参照先をすり替える
var instanceTwo = new Obj();

console.log(instanceOne.x);	//1 (変わらない。インスタンス生成時点のprototypeへの参照を保持)
console.log(instanceTwo.x);	//2 (当然変更後の2になっている)





