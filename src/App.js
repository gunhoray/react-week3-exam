import React, { useState } from 'react';
import {
  Button,
  InputContainer,
  PageWrapper,
  TodoCard,
  TodoContainer,
  TodoHeader,
  TodoListContainer,
} from './components/styles';
import nextId from 'react-id-generator';
import { useDispatch, useSelector } from 'react-redux';
// import { __addToDo, __deleteTodo } from './redux/modules/todosSlice';
import { addTodo,deleteTodo } from './redux/modules/todosSlice';

function App() {
  const id = nextId();
  const dispatch = useDispatch();
  // const todos = useSelector((state) => state.todos.todos);
  // const todos = useSelector((state)=> state.todos);
  const todos = useSelector((state) => state.todos);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const onAddTodo = (title, body) => {
    if (title === "" && body === "") {
      alert("빈값입니다");
  } else {
      const todo = {
          id: id,
          title,
          body,
      };
      dispatch(addTodo(todo));
      console.log("newtodo", todo)
  }
  };
 
  const onDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
    console.log("id", id)
  };

  const resetInputs = () => {
    onAddTodo(title,body);
    setTitle('');
    setBody('');
  };
  const onChangeTitle = (e) => setTitle(e.target.value);
  const onChangeBody = (e) => setBody(e.target.value);
  return (
    <PageWrapper>
      <TodoContainer>
        <TodoHeader>🐢 SLOW TODO LIST 🐢</TodoHeader>
        <InputContainer>
          <span>제목: </span>
          <input
            value={title}
            placeholder="할 일 제목"
            onChange={onChangeTitle}
          />
          <span>내용: </span>
          <input
            value={body}
            placeholder="할 일 내용"
            onChange={onChangeBody}
          />

          <Button onClick={resetInputs} >+ 추가하기</Button>
        </InputContainer>
        <TodoListContainer>
          {todos.map((todo) => { 
            return (
            <TodoCard key={todo.id}>
              <span>제목: {todo.title}</span>
              <span>할 일: {todo.body}</span>
              <Button onClick={()=>onDeleteTodo(todo.id)}>삭제하기</Button>
            </TodoCard>
          )})}
        </TodoListContainer>
      </TodoContainer>
    </PageWrapper>
  );
}

export default App;
