import { Component } from "react";

//bootstrap.module.css import
import bs from './css/bootstrap.module.css';
//classnames/bind import
import classnames from 'classnames/bind';
//import 한 bs 를 bind 한다.
const cx = classnames.bind(bs);

class App15 extends Component{
    state={
        isLarge : false,
        btnColor:"btn-info",
        textColor:"text-primary"
    }
    render(){
        return(
            <div className={bs.container}>
                <h1>React CSS 적용 예제</h1>
                큰 버튼<input type="checkbox" onChange={(e)=>{
                    //checkbox가 체크되어있는지 여부
                    console.log(e.target.checked);
                    //상태(state) 업데이트
                    this.setState({
                        isLarge:e.target.checked
                    })
                }} />
                <button className={cx('btn', 'btn-primary', {'btn-lg': this.state.isLarge})}>버튼</button>
                <br/>
                <select value={this.state.btnColor} onChange={
                    (e)=>{
                        this.setState({
                            btnColor: e.target.value
                        })
                    }
                }>
                    <option value="btn-primary">파란색</option>
                    <option value="btn-info">하늘색</option>
                    <option value="btn-success">녹색</option>
                </select>
                <button className={cx('btn', this.state.btnColor)}>버튼</button>
                <br/>
                <input type="text" value={this.state.textColor} onChange={this.handleChange}/>
                <p className={cx(this.state.textColor)}>blablablabla</p>
            </div>
        );
    }
    handleChange = (e)=>{
        this.setState({
            textColor:e.target.value
        })
    }
}

export default App15;