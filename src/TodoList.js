import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import TodoItem from './TodoItem';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            inputValue: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }

    handleBtnClick() {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        })
    }

    handleInputChange(e) {
        this.setState({
            inputValue: e.target.value
        })
    }

    handleDelete(index) {
        const list = [...this.state.list];
        list.splice(index, 1);
        this.setState({
            list: list
        })
        console.log(index)
    }

    getTodoItems() {
        return (
            this.state.list.map((item, index) => {
                return <TodoItem deleteItem={this.handleDelete} key={index} content={item}
                                 index={index}/>

            })
        )
    }

    //父组件通过属性的形式向子组件传递参数，子组件通过props接受父组件传递过来的参数
    render() {
        return (
            <div>
                <div>
                    <img src={logo} className="App-logo" alt="logo"/>
                    <input value={this.state.inputValue} onChange={this.handleInputChange}/>
                    <button onClick={this.handleBtnClick}>add</button>
                </div>
                <div>
                    <ul>
                        {this.getTodoItems()}
                    </ul>
                </div>
            </div>

        );
    }
}

export default TodoList;
