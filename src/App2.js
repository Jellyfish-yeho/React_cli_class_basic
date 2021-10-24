import { Component } from "react";
//로딩할 css 파일을 import만 해도 css가 자동 적용된다.
import './css/bootstrap.css';
//이미지를 출력하려면 역시 import 한다.
import kim from './images/kim1.png';

class App2 extends Component{
    //render() 함수에서 jsx를 리턴해주면 해당 jsx로 화면 구성을 한다.
    render(){
          //함수 안에 상수 or 변수 만들기
            const myName="온유";
            //적용할 inline css를 object로 작성한다. 
            const myStyle={
                color:"red",
                width:"100px",
                height:"100px",
                border:"1px solid red",
                backgroundColor:"orange"
            }
        return (
            <div className="container">
                <h1>Hello React?</h1>
                <img src={kim} alt="gura"/>
                <p>내 이름은 <strong>{myName}</strong></p>
                <button className="btn btn-primary" onClick={()=>{
                    alert("눌렀냐구~");
                }}>눌러!</button>
                <div style={{
                    color:"red",
                    width:"100px",
                    height:"100px",
                    border:"1px solid red",
                    backgroundColor:"orange"
                }}>div1</div>
                <div style={myStyle}>div2</div>
            </div>
        )
    }
}

//class를 리턴해주는 class 기반 Component
export default App2;