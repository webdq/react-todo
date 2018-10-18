import React,{Component} from 'react';

export default class TodoItem extends Component{
    render(){
        let {todo} = this.props;
        return (
            <li className="list-group-item todo-list-item">
                <div className="todo-item-ck pull-left">
                <input
                    id={todo.id}
                    onChange={()=>this.props.changeCompleted(todo.id)}
                    checked={todo.completed}
                    className="todo-item-checkbox"
                    type="checkbox"
                />
                <label htmlFor={todo.id} className="todo-item-label"></label>
                </div>
                <button
                    onClick={()=>this.props.removeTodo(todo.id)}
                    type="button"
                    className="btn btn-xs todo-del-btn pull-right"
                >x</button>
                <div className="todo-item-text">
                    {todo.completed ? <s>{todo.title}</s> : todo.title}
                </div>
            </li>
        )
    }
}