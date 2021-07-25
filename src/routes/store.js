import { createStore } from "redux"

// !! ACTION TYPE 한번 더 정리
const ADD = "ADD";
const DELETE = "DELETE"

// !! Action
const addToDo = (text) => {
    return {
        type:ADD,
        text
    }
}
const deleteToDo = (id) => {
    return {
        type:DELETE,
        id
    }
}

// !! reducer
const reducer = (state = [], action) => {
    switch (action.type){
        case ADD :
            return [{text:action.text, id:Date.now()}, ...state];
        case DELETE :
            return state.filter((todo)=> todo!==action.id);
        default :
            return state
    }
}

// !! store
const store = createStore(reducer);

// redux에서 store.subscribe()의 역할?
// react-redux에서는 index에서 provider 세팅 후 

export default store;