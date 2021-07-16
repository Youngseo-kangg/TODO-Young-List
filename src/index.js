import { createStore } from "redux"

const add = document.getElementById("add")
const minus = document.getElementById("minus")
const number = document.querySelector("span")

const ADD = "ADD"
const MINUS = "MINUS"
// !!REDUCER : 데이터 변경하고 업데이트하는 함수, 데이터 리턴함
const reducer = (state = 0, action) => { // action을 통해 더하기 동작을 할지, 빼기 동작 할지
  // TODO: action에 따라 state 업데이트 
  switch (action.type){
    case ADD: 
      return state + 1
    case MINUS:
      return state - 1
    default : 
      return state
  }
} 
// !!STORE : 데이터 저장소
const store = createStore(reducer) 

//!!ACTION : 어떤 행동을 할지 설명하는 객체 action
add.addEventListener("click", ()=> store.dispatch({type : ADD}))
minus.addEventListener("click", ()=> store.dispatch({type : MINUS}))

const onChange = () => {
  number.textContent = store.getState()
}

// store에서 변경이 있는지 감지하고 싶다면 subscribe함
// store에 변경이 있을때 뒤에 function 실행함
store.subscribe(onChange) 

// Vanila JavaScript 사용 경우
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