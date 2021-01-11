import React from 'react';


//Map 사용하기

function Food({name , picture}){//props name,picture추가
    return(
      <div>    
      <h2>i like {name}</h2>
        <img src={picture}/>
        </div>
    );
}

const foodLike =[//foodLike 변수에 빈 배열을 저장
  {   
      id:1,
      name: 'kimchi',
      image:"http://aeriskitchen.com/wp-content/uploads/2021/01/napa_cabbage_jeon_00-.jpg"
  },
  {
    id:2,
    name: 'mandu',
    image:"http://aeriskitchen.com/wp-content/uploads/2020/12/Steamed_Vegetable_Bun_01-.jpg"
  },

  {
    id:3,
    name: '땡초김밥',
    image:"http://aeriskitchen.com/wp-content/uploads/2020/11/Spam_DdaengCho_KimBap_01-.jpg"
  },



];

function renderFood(dish){
   return 
   <Food name={dish.name} picture={dish.image}/>;
}


function Props3(){
    console.log(foodLike.map(renderFood));
    return (
        <div>
            {foodLike.map(renderFood)}
        </div>
        //foodLike의 원소가 하나씩 넘어오면서 그 값을 name props에 전달
    );
};
//dish에foodLike배열에 있는 원소가 하나씩 넘어가고 원소는 객체형태이므로
//dish.name과 같이 음식 이름을 name props에 전달하엿다 
export default Props3;