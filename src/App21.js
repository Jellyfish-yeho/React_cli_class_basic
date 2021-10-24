import { Component } from "react";
import './css/bootstrap.css';
import _ from 'lodash';

class App21 extends Component{
    state={
       
    };

    handleSubmit = (e)=>{
        //기본 이벤트를 막아준다. (페이지 전환이 되지 않도록)
        e.preventDefault();
        //input 요소의 참조값을 이용해서 입력한 value 값을 얻어온다.
        const msg = this.inputMsg.value; 
        console.log(msg+" 를 전송합니다.");
    };

    render(){
        const msg_id=_.uniqueId('msg_');

        return (
            <div>
               <h1>form 테스트2</h1>
               <form onSubmit={this.handleSubmit}>
                   <label htmlFor={msg_id}>메세지 입력</label>
                   <input id={msg_id} type="text" ref={(ref)=>{
                       //input 요소의 참조값을 this.inputMsg 에 대입 
                       this.inputMsg=ref;
                   }}/>
                   <button type="submit">제출</button>
               </form>
            </div>
        );
    }
}

export default App21;