import React, { Component } from 'react';


//State는 class형태라서 jsx를 반환하지 않는다
//render()함수를 사용해서 해서 jsx를 반환한다

class State1 extends Component {
    state = { //state정의하기
      count : 0,  //state에 count라는 키를 추가, 키값은 0
    };
    //1.add 함수 추가
    add = () =>{
       //setState함수의 인자로 함수를 전달하는게 더 좋다
       this.setState(current => ({ //current에는 현재 state가 넘어오고 
           count : current.count +1, //그 state의 count에 1을 더하는거다
       }));
        //1.this.state.count = 1;//state는 직접변경하면안된다
       //2.this.setState({count :this.state.count +1});//count state를 1만큼 증가시키고
    };
    minus = () =>{
      this.setState(current =>({
          count : current.count -1,
      }));
      // this.state.count = -1;//state는 직접변경하면안된다
      //this.setState({count : this.state.count -1});//count state를 1만큼 감소시킨다
    };


    render() {
        return (
            <div>
                <h2>the number is : {this.state.count}</h2>  
               <p>this.state:현재 클래스에 선언힌 state를 의미 / state는 동적으로 데이터를 저장할수있다</p>
               <button onClick={this.add}>Add</button>
               <button onClick={this.minus}>Minus</button>
             </div>
            //onClick속성을 추가해서 속성값으로 this.add와 같이 함수를 넣어준다
        );
    }
}

export default State1;  