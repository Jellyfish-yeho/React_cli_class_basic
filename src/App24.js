import { Component } from "react";
// object 안에 저장된 내용을 query string 으로 변환해주는 모듈   name=xxx&addr=xxx
import qs from 'qs';

//axios import
import axios from 'axios'
//요청 base url 설정
axios.defaults.baseURL="http://localhost:8888/spring03";


class App24 extends Component{
    state={
       
    };
    render(){
       
        return (
            <div>
                <h1>axios 테스트3</h1>
                <form onSubmit={this.handleSubmit} action="/api/member/insert.do" method="post">
                    <input type="text" name="name" placeholder="이름 입력..."/>
                    <input type="text" name="addr" placeholder="주소 입력..."/>
                    <button type="submit">전송</button>
                </form>
            </div>
        );
    }

    handleSubmit = (e)=>{
        e.preventDefault();
        //submit 이벤트가 일어난 폼의 참조값
        console.log(e.target);
        //폼의 action 속성의 value 값
        const action = e.target.getAttribute("action");
        // new FormData( 전송할 폼의 참조값 ) 하면 전송할 데이터가 구성이 된다.
        const data = new FormData(e.target);
        axios({
            url:action,
            method:"POST",
            headers:{
                "Content-Type":'application/x-www-form-urlencoded'
            },
            data:data
        })
        .then(res=>{
            console.log(res.data);
        });
    }
    
}

export default App24;