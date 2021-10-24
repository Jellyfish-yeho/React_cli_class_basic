import { Component } from "react";
//로딩할 css 파일을 import만 해도 css가 자동 적용된다.
import './css/bootstrap.css';
import MyComponent from "./components/MyComponent";
import FortuneComponent from "./components/FortuneComponent";


class App10 extends Component{
    //컴포넌트에서 사용하는 데이터(model)을 react에서는 state로 관리한다.
    state={
        fortune:'서쪽으로 가시오'
    };
    //render() 함수에서 jsx를 리턴해주면 해당 jsx로 화면 구성을 한다.
    render(){
        return (
            <div className="container">
                <h1>Component Test</h1>
                <MyComponent/>
                <FortuneComponent fortuneToday={'동쪽으로 가시오'}/>
                <FortuneComponent fortuneToday={this.state.fortune}/>
                <button onClick={()=>{
                    this.setState({
                        fortune: '다음주에는 수료입니다?'
                    });
                }}>운세 바꾸기?</button>
                <FortuneComponent fortuneToday={this.state.fortune}
                likeClicked={()=>{
                    alert("like~?");
                }}/>
                <FortuneComponent fortuneToday={this.state.fortune}
                likeClicked={this.likeClicked}/>
                <FortuneComponent fortuneToday={this.state.fortune}
                likeClicked={this.likeClicked}
                send={(data)=>{
                    alert(data);
                }}/>
            </div>
        )
    }
    //자식 컴포넌트에게 전달할 함수 미리 만들어 놓기
    likeClicked = () => {
        alert("liked");
    }
}

//class를 리턴해주는 class 기반 Component
export default App10;