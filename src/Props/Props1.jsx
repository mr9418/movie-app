import React from 'react';

//Props
//컴포넌트에서 컴포넌트로 전달하는 데이터를 지칭

function Food(props){//props에 fav, something,papap가 넘어옴
    
    return (
       //<h1>나는 김치가 좋아</h1>
       <p>props를 사용해서 : 나는 {props.fav}가 좋아</p>
       //중괄호로 감싸서 사용한다
    );
}

function Props1() {
    return (
      <div className="App">
       <Food fav="kimchi"/>
     
      </div>
       //* <Food fav="kimchi" something={true} papapa={['hello',1,2]}/> */}
      //1.fav의 props값을 kimchi로 변경
       //2.props에 있는 데이터를 객체로 변환하여 Food 컴포넌트(함수에전달)
    );
  }
export default Props1;