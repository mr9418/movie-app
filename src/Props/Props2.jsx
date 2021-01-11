import React from 'react';


//구조분해할당으로 props사용하기
//ES6 문법중 구조분해할당을 사용하면 점 연산자를 사용하지않아도된다
function Food({fav}){
    return(
      <h1>i like {fav}</h1>
    );
}


function Props2(){
    return (
        <div>
         <Food fav="kimchi"/>
         <Food fav="삼겹살"/>
         <Food fav="비빔면"/>     
        </div>
        //fav props에는 서로 다른 값이 들어있어서
        //같은 컴포넌트를 사용해도 다른 문장이 출력된다
    );
};

export default Props2;