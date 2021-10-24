import { Component } from "react";

//bootstrap.module.css import
import bs from './css/bootstrap.module.css';
//classnames/bind import
import classnames from 'classnames/bind';
//import 한 bs 를 bind 한다.
const cx = classnames.bind(bs);

class App14 extends Component{
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
        //cx 함수 테스트
        const btn4 = cx('btn', 'btn-primary');
        const btn5 = cx(['btn', 'btn-primary']);
        const btn6 = cx({'btn':true, 'btn-primary':true});

        return(
            <div className={bs.container}>
                <h1>React CSS 적용 예제</h1>
                <button className="btn btn-primary">벝뜬</button>
                <button className={bs.btn + ' ' + bs['btn-primary']}>버뜬</button>
                <button className={btn1}>버뜬1</button>
                <button className={btn2}>버뜬2</button>
                <button className={btn3}>버뜬3</button>
                <button className={btn4}>버뜬4</button>
                <button className={btn5}>버뜬5</button>
                <button className={btn6}>버뜬6</button>
            </div>
        );
    }
}

export default App14;