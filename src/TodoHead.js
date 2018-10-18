import React,{Component} from 'react';

export default class TodoHead extends Component{
    handleKeyDown = (e)=>{
        let val = e.target.value;
        val = val.replace(/^\s+|\s+$/g,'');
        if(e.keyCode === 13 && val !== ''){
            this.props.addTodo({title:val});
            e.target.value = '';
        }
    }

    handleClick = ()=>{
        let val = this.refs.todoIntpu.value;
        val = val.replace(/^\s+|\s+$/g,'');
        if(val !== ''){
            this.props.addTodo({title:val});
            this.refs.todoIntpu.value = '';
        }
    }

    render(){
        return (
            <div>
                <div className="input-group">
                    <input ref="todoIntpu" onKeyDown={this.handleKeyDown} placeholder="请输入待办事项" className="form-control todo-add-input" type="text" />
                    <span className="input-group-btn">
                        <button onClick={this.handleClick} className="btn todo-add-btn" type="button">添加</button>
                    </span>
                </div>
            </div>
        )
    }
}