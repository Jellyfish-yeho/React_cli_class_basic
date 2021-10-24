import { Component } from "react";
import _ from 'lodash'
//bootstrap.module.css import
import bs from './css/bootstrap.module.css';
//classnames/bind import
import classnames from 'classnames/bind';
//import 한 bs 를 bind 한다.
const cx = classnames.bind(bs);



class App18 extends Component{
    state={
        
    };
    range = (start, end)=>{
        const arr=[];
        for(let i=start; i<=end; i++){
            arr.push(i);
        }
        return arr;
    }

    render(){
        let nums=[1,2,3,4,5];
        let result=nums.map(item=><li>{item}</li>);
        return(
            <div>
                <h3>1~5까지 출력하기</h3>
                <ul>
                    {result}
                </ul>
                <h3>1~5까지 출력하기</h3>
                <ul>
                    {nums.map(item=><li>{item}</li>)}
                </ul>
                <h3>1~5까지 출력하기</h3>
                <ul>
                    {this.range(1,5).map(item=><li>{item}</li>)}
                </ul>
                <h3>11~20까지 출력하기</h3>
                <ul>
                    {this.range(11,20).map(item=><li>{item}</li>)}
                </ul>
                <h3>11~20까지 출력하기 - lodash</h3>
                <ul>
                    {_.range(11,20).map(item=><li key={_.uniqueId()}>{item}</li>)}
                </ul>
            </div>
        );
    }

}

export default App18;