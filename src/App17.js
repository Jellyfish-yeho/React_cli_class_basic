import { Component } from "react";

//bootstrap.module.css import
import bs from './css/bootstrap.module.css';
//classnames/bind import
import classnames from 'classnames/bind';
//import 한 bs 를 bind 한다.
const cx = classnames.bind(bs);

class App17 extends Component{
    state={
        currentWeapon:"gun"
    };
    weaponObj={
        fist: <strong>주먹</strong>,
        sword: <strong>칼</strong>,
        gun: <strong>총</strong>
    }

    render(){
        return(
            <div className={bs.container}>
                <h1>조건부 렌더링</h1>
                무기를 선택하세요
                <select value={this.state.currentWeapon} onChange={(e)=>{this.setState({currentWeapon:e.target.value})}}>
                    <option value="fist">주먹</option>
                    <option value="sword">칼</option>
                    <option value="gun">총</option>
                </select>
                <p>
                    { this.state.currentWeapon ==="fist" && <strong>주먹</strong> }
                    { this.state.currentWeapon ==="sword" && <strong>칼</strong> }
                    { this.state.currentWeapon ==="gun" && <strong>총</strong> }
                    으로 공격해요
                </p>
                <p>{this.weaponObj[this.state.currentWeapon]} 으로 공격해요...</p>
            </div>
        );
    }

}

export default App17;