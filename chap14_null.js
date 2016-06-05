//undefinedではなく、nullを使うべき時
// ・値は存在するが、何らかの理由で値を使用することができないとき
// ・以下も参考にー
// ・http://tokidoki-web.com/2014/12/javascript%E3%81%AEnull%E3%81%A8undefined%E3%81%AE%E5%8C%BA%E5%88%A5%E3%81%A8%E4%BD%BF%E3%81%84%E5%88%86%E3%81%91%E3%82%92%E3%81%BE%E3%81%A8%E3%82%81%E3%81%A6%E3%82%84%E3%82%93%E3%82%88/


//------------------------------------------------


//nullかどうかの判定は、同値演算子(===)で！

var obj = null;
console.log(typeof obj);        //'object'。本書の中でさんざん言われてるけど、typeof演算子は地雷だから要注意！
console.log(obj == undefined);  //true。等値演算子(==)は絶対使っちゃダメ！
console.log(obj === undefined); //false。同値演算子(===)使おう！
