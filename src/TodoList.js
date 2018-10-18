import React,{Component} from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends Component{
    handleChange = (e)=>{
        let check = e.target.checked;
        this.props.toggleAll(check);
    }

    checkAll = ()=>{
        let completedTodo = this.props.todos.reduce((n,todo)=>{return n+(todo.completed?1:0)},0);
        return completedTodo === this.props.todos.length && this.props.todos.length > 0;
    }

    render(){
        let check = this.checkAll();
        let {changeFilterType,filterType,removeTodo,changeCompleted} = this.props;
        return (
            <div>
                <div className="todo-filter-group">
                    <div className="btn-group text-center">
                        <button
                            onClick={()=>changeFilterType('all')}
                            type="button"
                            className={'btn btn-sm todo-filter-btn '+(filterType==='all' ? 'todo-filter-active' : '')}
                        >全部</button>
                        <button
                            onClick={()=>changeFilterType('active')}
                            type="button"
                            className={'btn btn-sm todo-filter-btn '+(filterType==='active' ? 'todo-filter-active' : '')}
                        >未完成</button>
                        <button
                            onClick={()=>changeFilterType('completed')}
                            type="button"
                            className={'btn btn-sm todo-filter-btn '+(filterType==='completed' ? 'todo-filter-active' : '')}
                        >已完成</button>
                    </div>
                </div>
                <ul className="list-group todo-list">
                    {
                        this.props.todos.length>0 ? <li className="list-group-item todo-list-item"><div className="todo-item-ck pull-left">
                        <input id="todoCheckAll" onChange={this.handleChange} checked={check} className="todo-item-checkbox" type="checkbox" />
                        <label htmlFor="todoCheckAll" className="todo-item-label"></label></div>
                        <div className="todo-item-text">{check ? '反选' : '全选'}</div>
                        </li> : <li className="list-group-item todo-list-item">暂无数据</li>
                    }
                    {
                        this.props.todos.map((todo,index)=>{
                            return <TodoItem removeTodo={removeTodo} changeCompleted={changeCompleted} key={index} todo={todo} />
                        })
                    }
                </ul>
            </div>
        )
    }
}