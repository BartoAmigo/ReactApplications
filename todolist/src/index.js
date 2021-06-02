import React from 'react';
import ReactDOM from 'react-dom';

/* Todo List */
function TodoList(props){
  const todoitems = todos.map((todo)=>
  <TodoItem key={props.taskid} taskid={todo.taskid.toString()} task={todo.task}/>
  );
  return <div><h1>Tasks</h1> {todoitems}</div>
}

function TodoItem(props){
  return <h2>{props.taskid}: {props.task}</h2>
}

const todos = [
  {taskid:1,task:'Clean up trash'},
  {taskid:2,task:'Clean up bathroom'}
];
/*******************************************/
/* Blog Example */ 
const posts =[
  {id:1,title:"React",content:"learning React"},
  {id:2,title:"Web Programming",content:"learning web programming"}
];
function Blog(props){
  const content = posts.map((post)=>
    <Post
    key={post.id}
    id={post.id}
    title={post.title}
    content={post.content}
    />
  );
  return <div><h1>Blog Content</h1>{content}</div>;
}
function Post(props){
  return <div>
    <h2>{props.id}</h2>
    <h3>{props.title}</h3>
    <p>{props.content}</p>
  </div>
}

/******************************************/
function App(){
  return <div>
    <Blog/> 
    <TodoList/>
    </div>

}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);

