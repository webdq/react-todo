import React,{Component} from 'react';

export default class TodoFooter extends Component{
    render(){
        let {activeTodo} = this.props;
        return (
            <div className="clearfix">
                <div className="pull-left">
                    <button className="btn btn-xs todo-completed-btn" type="button">
                        剩余待办 <span className="badge">{activeTodo}</span>
                    </button>
                </div>
                {
                    this.props.completedTodo > 0 ? <div className="pull-right">
                    <button onClick={()=>this.props.removeCompleted()} type="button" className="btn btn-xs todo-del-btn">删除已完成</button></div> : null
                }
            </div>
        )
    }
}