import { Component } from "react";
import './css/bootstrap.css';
import _ from 'lodash';
//axios import
import axios from "axios";
//요청 base url 설정
axios.defaults.baseURL="http://localhost:8888/spring03"


class App22 extends Component{
    state={
       
    };

    render(){

        return (
            <div>
               <h1>axios Test</h1>
               <button onClick={this.getMembers}>회원 목록 불러오기</button>
            </div>
        );
    }
    //axios를 이용해서 회원 목록 불러오기
    getMembers= ()=>{
        axios({
            url:"/api/member/list.do",
            method:"GET"
        })
        .then(res=>{
            //res 는 응답된 정보를 담고 있는 object 이다.
            console.log(res);
            //res.data 에는 응답된 json 문자열이 object 혹은 array 로 바껴서 들어 있다.
            console.log(res.data);
            
        })
        .catch(err=>{
            console.log(err);
        })
    }
}

export default App22;