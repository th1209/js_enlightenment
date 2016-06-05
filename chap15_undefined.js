//変数の値がundefindとなるタイミング

//初期化しない場合、undefined
var obj;
console.log(obj);

//存在しないプロパティは、undefined
var obj = {hoge: 'hoge'};
console.log(obj.foo);

//deleteしたら、undefined
delete obj.hoge;
console.log(obj.hoge);


//------------------------------------------------


//undefinedはグローバル変数として存在している。
//書き換える恐れがあるので、絶対使っちゃダメ。
//変数を無効にするなら、delete演算子とか、null代入とかで対処せよ。
//(グローバル変数にはdelete演算子使えないこともついでに補足。
// グローバルプロパティとか、ローカル変数、プロパティあたりはこの限りでない。)

console.log(undefined in this); //true