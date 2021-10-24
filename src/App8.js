import { Component } from "react";
//로딩할 css 파일을 import만 해도 css가 자동 적용된다.
import './css/bootstrap.css';

class App8 extends Component{
    //컴포넌트에서 사용하는 데이터(model)을 react에서는 state로 관리한다.
    state={

    };
    handleClick=()=>{
        //input 요소에 입력한 문자열을 읽어와서
        let msg=this.inputMsg.value;
        //알림에 띄우기
        alert(msg);
    }


    //render() 함수에서 jsx를 리턴해주면 해당 jsx로 화면 구성을 한다.
    render(){


        return (
            <div className="container">
                <h1>문서객체의 참조값 얻어내기</h1>
                <input type="text" ref={(ref)=>{
                    //함수의 인자로 전달된 input 요소의 참조값을 inputMsg 라는 이름의 필드에 저장하기
                    this.inputMsg=ref;
                }}/>
                <button onClick={this.handleClick}>눌러.</button>
            </div>
        )
    }
}

//class를 리턴해주는 class 기반 Component
export default App8;