import { Component } from "react";
// object 안에 저장된 내용을 query string 으로 변환해주는 모듈   name=xxx&addr=xxx
import qs from 'qs';

//axios import
import axios from 'axios'
//요청 base url 설정
axios.defaults.baseURL="http://localhost:8888/spring03";


class App23 extends Component{
    state={
       member:{
           name:'',
           addr:''
       }
    };
    render(){
       
        return (
            <div>
                <h1>axios 테스트2</h1>
                <input type="text" placeholder="이름 입력..." onChange={(e)=>{
                    this.setState({
                        member:{...this.state.member, name:e.target.value}
                    });
                }}  />
                <input type="text" placeholder="주소 입력..." onChange={(e)=>{
                    this.setState({
                        member:{...this.state.member, addr:e.target.value}
                    });    
                }}  />
                <button onClick={()=>{
                    axios({
                        url:"/api/member/insert.do",
                        method:"POST",
                        headers:{
                            "Content-Type":'application/x-www-form-urlencoded'
                        },
                        data:qs.stringify(this.state.member)
                    })
                    .then(res=>{
                        console.log(res.data);
                    });
                }}>전송</button>
                <p>{JSON.stringify(this.state.member)}</p>
            </div>
        );
    }
    
}

export default App23;