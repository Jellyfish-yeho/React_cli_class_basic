import { useEffect } from "react";

//함수 기반의 자식 component 만들기
function FriendList({friends,greet}){
    //부모가 전달한 property 값은 함수의 인자로 전달된다. 
    //props는 object type이다. 
    //console.log(props);

    //let {friends, greet}=props;

    console.log("111");
    /*
        useEffect( ) 함수를 호출하면서 안에 전달한 함수는,
        컴포넌트가 완벽히 준비되었을 때 호출되는 함수이다.
        따라서 무언가 준비 작업 (ajax 요청을 이용해서 데이터를 받아오는 등...)을 하기 적당한 곳이다. 
    */
    useEffect(()=>{
        console.log("컴포넌트가 마운트 되었습니다.");
    });

    console.log("333");

    return (
        <div>
            <h3>My Friends List!</h3>
            <ul>
                {friends.map(item=><li>{item}</li>)}
            </ul>
            <p>Greetings: {greet}</p>
        </div>
    )
}

export default FriendList;