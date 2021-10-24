import { Component } from "react";
import './css/bootstrap.css';
import cn from 'classnames';


class App19 extends Component{
    state={
        
    };

    render(){
        const btnStyle='btn btn-primary'
        return(
            <div>
                <h1>classnames 모듈 사용</h1>
                    <button className="btn btn-primary">Button1</button>                
                    <button className={btnStyle}>Button2</button> 
                    <button className={cn('btn','btn-primary')}>Button3</button>   
                    <button className={cn(['btn','btn-primary'])}>Button</button>  
                    <button className={cn([{'btn':true, 'btn-primary':true}])}>Button</button>  
            </div>
        );
    }

}

export default App19;