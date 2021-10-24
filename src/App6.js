import { Component } from "react";
//로딩할 css 파일을 import만 해도 css가 자동 적용된다.
import './css/bootstrap.css';

class App6 extends Component{
    //컴포넌트에서 사용하는 데이터(model)을 react에서는 state로 관리한다.
    state={
        x:0,
        y:0       
    };

    //mouse move 이벤트가 일어났을 때 호출되는 함수
    handleMouseMove=(e)=>{
        this.setState({
            x: e.clientX,
            y: e.clientY
        });
    }

    //render() 함수에서 jsx를 리턴해주면 해당 jsx로 화면 구성을 한다.
    render(){
        const boxStyle={
            width:'300px',
            height:'300px',
            border:'1px solid red',
            backgroundColor:'green'
        }
        return (
            <div className="container">
                <h1>이벤트 처리</h1>
                <div style={boxStyle} onMouseMove={this.handleMouseMove}></div>
                <p> x: {this.state.x}, y: {this.state.y}</p>
            </div>
        )
    }
}

//class를 리턴해주는 class 기반 Component
export default App6;