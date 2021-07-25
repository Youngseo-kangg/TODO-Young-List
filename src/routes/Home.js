import React, { useState } from "react";
import { connect } from "react-redux";

function Home({toDos}) {
    const [text, setText] = useState("");
    function onChange(e) {
        setText(e.target.value);
    }
    function onSubmit(e) {
        e.preventDefault();
        setText("");
    }

    return (
        <>
            <h1>To Do</h1>
            <form onSubmit={onSubmit}>
                <input type="text" value={text} onChange={onChange} />
                <button>Add</button>
            </form>
            <ul>{JSON.stringify(toDos)}</ul>
        </>
    );
}

// mapStateToProps(state, component의 props)
// state는 redux store
// ownprops는 react-router을 통해 Home으로 전달된 컴포넌트의 props
function mapStateToProps(state, ownProps){
    // console.log(state) // store의 상태
    // console.log(ownProps) // 전달받은 props
    return {toDos:state}
}

//3.2 5:00부터

// 1. store에서 home으로 state를 가져오고 싶다면?
// connect() 라는 react-redux 함수를 사용하여 
// 매개변수로 getCurrentState함수를 넣어주고 Home 컴포넌트도 같이 전달해줌
// 2. conncet()는 Home으로 보내는 props를 인터셉트 해서 props에 내용 추가해줄 수 있음
export default connect(mapStateToProps)(Home);