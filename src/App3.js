import { Component } from "react";
//로딩할 css 파일을 import만 해도 css가 자동 적용된다.
import './css/bootstrap.css';

class App3 extends Component{
    //컴포넌트에서 사용하는 데이터(model)을 react에서는 state로 관리한다.
    state={
        myName:"온유"
    } 

    //render() 함수에서 jsx를 리턴해주면 해당 jsx로 화면 구성을 한다.
    render(){
        return (
            <div className="container">
                <p>내 이름은: {this.state.myName}</p>
                <button onClick={()=>{
                    //state값을 직접 수정하면 안된다. 
                    //this.state.myName='민호';
                    /*
                        state값을 수정하기 위해서는 Component로부터 상속받은 메소드인 setStae()를 이용해서 수정해야 한다. 
                    */
                    this.setState({
                        myName:'민호'
                    });
                }}>눌러!</button>
            </div>
        )
    }
}

//class를 리턴해주는 class 기반 Component
export default App3;