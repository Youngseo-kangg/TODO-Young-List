// 3. Redux 사용한 Todo
import {createStore} from "redux"

const ADD_TODO = "ADD_TODO"
const REMOVE_TODO = "REMOVE_TODO"

// !! Reducer
const reducer = (state=[], action) => {
  switch(action.type){
    case ADD_TODO:
      return [...state,{text:action.text, id:Date.now()}]
    case REMOVE_TODO:
      return state.filter((todo)=> todo.id!==action.id)
    default:
      return state
  }
}

// !! Action
const addTodo = (text) => {
  return {
    type:ADD_TODO,
    text
  }
}
const removeTodo = (id) => {
  return {
    type:REMOVE_TODO,
    id
  }
}

// !! store
const store = createStore(reducer)
store.subscribe(()=>console.log(store.getState())) // store에 변경 생기면 콘솔에 찍기

// !! dispatching
const dispatchAddTodo = (text) => {
  store.dispatch(addTodo(text)) // store에서 reducer로 action 보내주기
}
const dispatchRemoveTodo = (e)=>{
  const id = parseInt(e.target.parentNode.id)
  store.dispatch(removeTodo(id))
}

const paintTodos = () => {
  const todos = store.getState()
  ul.innerHTML = ""
  todos.forEach((todo)=>{
    const li = document.createElement("li")
    const btn = document.createElement("button")
    btn.innerText = "REMOVE" // 버튼에 보일 글씨 할당
    btn.addEventListener("click", dispatchRemoveTodo)
    li.id = todo.id // id값 할당
    li.innerText = todo.text; // 안에 보일 글 할당
    li.appendChild(btn) // 만든 btn li에 붙여주기
    ul.appendChild(li) // 만든 li ul에 붙여주기
  })
}
store.subscribe(paintTodos)

const form = document.querySelector("form")
const input = document.querySelector("input")
const ul = document.querySelector("ul")

const onSubmit = e => {
  e.preventDefault();
  const toDo = input.value;
  input.value="";
  dispatchAddTodo(toDo)
}

form.addEventListener("submit", onSubmit)

// 2. Vanila JS 사용한 Todo 
// 단순히 HTML만 변경해주는 것이고, 직접 배열에다가 데이터를 넣고 관리해줘야 함
// const form = document.querySelector("form")
// const input = document.querySelector("input")
// const ul = document.querySelector("ul")

// const createTodo = todo => {
//   const li = document.createElement("li");
//   li.innerText = todo;
//   ul.appendChild(li);
// }

// const onSubmit = e => {
//   e.preventDefault();
//   const toDo = input.value;
//   input.value="";
//   createTodo(toDo);
// }

// form.addEventListener("submit", onSubmit)


// 1. Redux 사용한 counter 
// import { createStore } from "redux"

// const add = document.getElementById("add")
// const minus = document.getElementById("minus")
// const number = document.querySelector("span")

// const ADD = "ADD"
// const MINUS = "MINUS"
// // !!REDUCER : 데이터 변경하고 업데이트하는 함수, 데이터 리턴함
// const reducer = (state = 0, action) => { // action을 통해 더하기 동작을 할지, 빼기 동작 할지
//   // TODO: action에 따라 state 업데이트 
//   switch (action.type){
//     case ADD: 
//       return state + 1
//     case MINUS:
//       return state - 1
//     default : 
//       return state
//   }
// } 
// // !!STORE : 데이터 저장소
// const store = createStore(reducer) 

// //!!ACTION : 어떤 행동을 할지 설명하는 객체 action
// add.addEventListener("click", ()=> store.dispatch({type : ADD}))
// minus.addEventListener("click", ()=> store.dispatch({type : MINUS}))

// const onChange = () => {
//   number.textContent = store.getState()
// }

// store에서 변경이 있는지 감지하고 싶다면 subscribe함
// store에 변경이 있을때 뒤에 function 실행함
// store.subscribe(onChange) 

// 0. Vanila JavaScript 사용한 counter 
// const add = document.getElementById("add")
// const minus = document.getElementById("minus")
// const number = document.querySelector("span")

// let count = 0; // redux의 state
// number.innerText = count

// const updateText = () => {
//   number.innerText = count
// }
// const handleAdd = () => {
//   count = count + 1
//   updateText()
// }

// const handleMinus = () => {
//   count = count - 1
//   updateText()
// }

// add.addEventListener("click", handleAdd)
// minus.addEventListener("click", handleMinus)