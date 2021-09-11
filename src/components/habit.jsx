import React, { Component } from 'react';
import Habits from './habits'
const { count } = this.props.habit

class Habit extends Component {


    state = { //memeber variable
        count: { count },
    }

    handleIncrement = () => {
        this.setState({ count: this.state.count + 1 })
    }

    handleDecrement = () => {
        const count = this.state.count - 1
        this.setState({ count: count < 0 ? 0 : count })
    }

    render() {
        //console.log(this.props.habits)
        //const habitName = this.props.habit.name //이게 불편하니까 
        const { name, count } = this.props.habit //object destructuring 
        return (
            <li className="habit">
                <span className="habit-name">{name}</span>
                <span className="habit-count">{count}</span>
                <button className="habit-button habit-increase"
                    onClick={this.handleIncrement}>
                    <i className="fas fa-plus-square"></i>
                </button>
                <button className="habit-button habit-decrease"
                    onClick={this.handleDecrement}>
                    <i className="fas fa-minus-square"></i>
                </button>
                <button className="habit-button habit-delete">
                    <i className="fas fa-trash"></i>
                </button>
            </li>
        );
    }
}

export default Habit;