import { Component } from "react";
import './css/bootstrap.css';
import _ from 'lodash'

class App20 extends Component{
    state={
        msg:''
    };

    handleSubmit = (e)=>{
        //페이지 전환이 되지 않도록 기본 이벤트를 막아준다. 
        e.preventDefault();
        console.log(this.state.msg+" : sending . . .")
    }

    render(){
        const msg_id=_.uniqueId("msg_");
        return(            
            <div>
                <h1>form Test</h1>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor={msg_id}>메세지 입력</label>
                    <input id={msg_id} type="text" onChange={(e)=>{
                        this.setState({
                            msg: e.target.value
                        });
                    }} value={this.state.msg}/>
                    <button type="submit">제출</button>
                </form>
                <p>입력한 메세지 : <strong>{this.state.msg}</strong></p>
            </div>
        );
    }

}

export default App20;