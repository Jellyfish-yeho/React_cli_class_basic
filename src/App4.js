import { Component } from "react";
//로딩할 css 파일을 import만 해도 css가 자동 적용된다.
import './css/bootstrap.css';

class App4 extends Component{
    //컴포넌트에서 사용하는 데이터(model)을 react에서는 state로 관리한다.
    state={
        myName:"온유"
    } 
    /*
        클래스에서 추가한 함수에서 this를 사용하려면 
        반드시 함수를 화살표 함수로 만들어야 한다. 
    */
    changeClicked= ()=>{
        console.log("changeClicked");
        this.setState({
            myName:"민호"
        });
    }

    //render() 함수에서 jsx를 리턴해주면 해당 jsx로 화면 구성을 한다.
    render(){
        return (
            <div className="container">
                <p>내 이름은: {this.state.myName}</p>
                <button onClick={this.changeClicked}>눌러!</button>
            </div>
        )
    }
}

//class를 리턴해주는 class 기반 Component
export default App4;