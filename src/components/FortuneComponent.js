import { Component } from "react";

class FortuneComponent extends Component{
    render(){
        return (
            <div>
                <p>FortuneComponent 입니다?</p>
                <p>오늘의 운세 : <strong>{this.props.fortuneToday}</strong></p>
                <button onClick={this.props.likeClicked}>좋아요</button>
                <br/>
                <input ref={(ref)=>{this.inputText=ref}} placeholder="하고 싶은 말..."/>
                <button onClick={this.send}>부모 Component에게 전달</button>
            </div>
        );
    }
    send = ()=>{
        //입력한 문자열을 읽어와서
        let msg=this.inputText.value;
        //부모에게서 전달받은 props 함수를 호출하면서 전달하기
        this.props.send(msg);
    }
}

export default FortuneComponent;
