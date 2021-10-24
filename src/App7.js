import { Component } from "react";
//로딩할 css 파일을 import만 해도 css가 자동 적용된다.
import './css/bootstrap.css';

class App7 extends Component{
    //컴포넌트에서 사용하는 데이터(model)을 react에서는 state로 관리한다.
    state={

    };

    //render() 함수에서 jsx를 리턴해주면 해당 jsx로 화면 구성을 한다.
    render(){
        let jsxList=[(<li key={0}>온유</li>),(<li key={1}>민호</li>),(<li key={2}>태민</li>)];
        //jsx안에 넣을 내용을 가지고 있는 배열
        let names=["온유","민호","태민"]

        let jsxList2=[];
        for(let i=0; i<names.length; i++){
            //jsx 객체를 만들어서 
            let tmp=(<li key={i}>{names[i]}</li>);
            jsxList2.push(tmp);
        }

        //배열의 .map() 함수를 이용해서 새로운 배열을 얻어낸다. 
        let jsxList3=names.map((item,index)=>{
            return (<li key={index}>{item}</li>)
        });

        let jsxList4=names.map((item,index)=>(<li key={index}>{item}</li>));

        return (
            <div className="container">
                <h1>JSX 활용</h1>
                <h2>친구 목록1</h2>
                <ul>
                    {jsxList}
                </ul>
                <h2>친구 목록2</h2>
                <ul>
                    <li>{jsxList2}</li>
                </ul>
                <h2>친구 목록3</h2>
                <ul>
                    <li>{jsxList3}</li>
                </ul>
                <h2>친구 목록4</h2>
                <ul>
                    <li>{jsxList4}</li>
                </ul>
                <h2>친구 목록5</h2>
                <ul>
                    <li>{names.map((item,index)=>(<li key={index}>{item}</li>))}</li>
                </ul>
            </div>
        )
    }
}

//class를 리턴해주는 class 기반 Component
export default App7;