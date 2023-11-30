Inspirce by : [React Todo List App Tutorial - React JS Project Tutorial for Beginners](https://www.youtube.com/watch?v=Hf4MJH0jDb4)

### What I learned ? 

1. Strat components by using `rafc`
2. useState - to manage value input by users
3. Define a function include multiple funtion

```
// funtion like task, toolComplete, deleteTodo, editTodo
const Todo = ({task, toggleComplete, deleteTodo, editTodo}) => {

}
```
4. onClick - to call function
5. use `console.log` to check the vlaue
6. AI make mistake and misunderstand the code → need better tool 
7. [Cursor](https://cursor.sh/) response is pretty slow and not precise 
8. [CodeGeeX](https://codegeex.cn/) is the best tool to check the code ( response fast and format is easy to read)
10. Create environment by using `create-react-app` and without setup issue 
11. Delete installed file like `App.test` , `index.css` , `SetupTest.js`

### What issue I fixed ? 

1. "no function" error → add {} for {addTodo}
2. 


### how to do better next time ? 

1. when display "no function" check {} is inclued the text 
2. writedown my issue, and all possible solutions, try it step by step → I repeat wrong steps and it waste so much time
3. use `console.log` to check the value
4. Focus on `useState` practice
5. Clone more project and learn their skill
6. Check the code by using `CodeGeeX`

### What I don't know ? 

1. what's uuidv4 and how to use ? 
2. how to  use `map`

```
setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo))

```
3. whole logic of to-do list app → I can't create on my own and without referecne 
