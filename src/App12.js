import { Component } from "react";

//전역에서 사용할 css import
import './css/bootstrap.css';
//지역(App12)에서만 사용할 css import
/*
    [모듈화된 css 사용하는 방법]
    1. css파일 이름을 '파일명.module.css' 와 같은 형식으로 정의한다.
    2. from과 함께 import 해서 사용한다. 
*/
import styles from './custom_css/app12.module.css';

class App12 extends Component{
    render(){
        return(
            <div className="container">
                <h1>React CSS 적용 예제</h1>
                <div className={styles.box}>box</div>
            </div>
        );
    }
}

export default App12;