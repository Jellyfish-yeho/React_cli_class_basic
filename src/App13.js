import { Component } from "react";

//bootstrap.module.css import
import bs from './css/bootstrap.module.css';
class App13 extends Component{
    render(){

        //bs는 object type이다.
        console.log(bs);
        //bs.방의이름 해서 참조
        console.log(bs.container);

        /*
            btn1, btn2, btn3의 문자열 내용은 모두 같다.
        */
        const btn1 = bs.btn+' '+bs['btn-primary'];
        const btn2 = `${bs.btn} ${bs['btn-primary']}`;
        const btn3 = [bs.btn, bs['btn-primary']].join(' ');

        return(
            <div className={bs.container}>
                <h1>React CSS 적용 예제</h1>
                <button className="btn btn-primary">벝뜬</button>
                <button className={bs.btn + ' ' + bs['btn-primary']}>버뜬</button>
                <button className={btn1}>버뜬1</button>
                <button className={btn2}>버뜬2</button>
                <button className={btn3}>버뜬3</button>
            </div>
        );
    }
}

export default App13;