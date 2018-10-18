import React,{Component} from 'react';
import TodoHead from './TodoHead';
import TodoList from './TodoList';
import TodoFooter from './TodoFooter';
import 'bootstrap/dist/css/bootstrap.css';
import './todo.css';

export default class TodoApp extends Component{
    constructor(props){
        super(props);
        this.state = {
            filterType: 'all'
        }
    }

    changeFilterType = (filterType)=>{
        this.setState({filterType});
    }

    render(){
        let todos = this.props.model.todos;
        let showTodos = todos.filter(todo=>{
            switch(this.state.filterType){
                case 'completed':
                    return todo.completed;
                case 'active':
                    return !todo.completed;
                default:
                    return true;
            }
        })
        let completedTodo = todos.reduce((n,todo)=>{return n+(todo.completed?1:0)},0);
        let activeTodo = todos.length-completedTodo;

        return (
            <div className="main">
                <div className="topbar"></div>
                <div className="container">
                    <h2 className="todo-title">REACT-TODO</h2>
                    <div className="row">
                        <div className="col-sm-6 col-sm-offset-3">
                            <div className="panel panel-todo">
                                <div className="panel-heading">
                                    <TodoHead addTodo={this.props.model.addTodo} />
                                </div>
                                <div className="panel-body">
                                    <TodoList
                                        changeFilterType={this.changeFilterType}
                                        filterType={this.state.filterType}
                                        removeTodo={this.props.model.removeTodo}
                                        toggleAll={this.props.model.toggleAll}
                                        completedTodo={completedTodo}
                                        changeCompleted={this.props.model.changeCompleted}
                                        todos={showTodos}
                                    />
                                </div>
                                <div className="panel-footer">
                                    <TodoFooter
                                        removeCompleted={this.props.model.removeCompleted}
                                        changeFilterType={this.changeFilterType}
                                        filterType={this.state.filterType}
                                        activeTodo={activeTodo}
                                        completedTodo={completedTodo}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}