export default class TodoModel{
    constructor(){
        this.STORAGE_KEY = 'react-todos';
        this.todos = JSON.parse(localStorage.getItem(this.STORAGE_KEY)) || [];
        this.listeners = [];
    }

    subscribe(listener){
        this.listeners.push(listener);
    }

    emit(){
        this.listeners.forEach(listener=>listener());
    }

    notify(todos){
        localStorage.setItem(this.STORAGE_KEY,JSON.stringify(todos));
        this.emit();
    }

    addTodo = (payload)=>{
        let todos = this.todos;
        let todo = Object.assign({},payload,{id:Math.random(),completed:false});
        todos.unshift(todo);
        this.notify(todos);
    }

    removeTodo = (id)=>{
        let todos = this.todos;
        let index = todos.findIndex(todo=>todo.id===id);
        todos.splice(index,1);
        this.notify(todos);
    }

    removeCompleted = ()=>{
        let todos = this.todos.filter(todo=>!todo.completed);
        this.todos = todos;
        this.notify(todos);
    }

    changeCompleted = (id)=>{
        let todos = this.todos.map(todo=>{
            if(todo.id === id){
                todo.completed = !todo.completed;
            }
            return todo;
        });
        this.todos = todos;
        this.notify(todos);
    }

    toggleAll = (check)=>{
        let todos = this.todos.map(todo=>{
            todo.completed = check;
            return todo;
        });
        this.todos = todos;
        this.notify(todos);
    }
}