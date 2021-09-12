import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
    state = {
        habits: [
            { id: 1, name: 'reading', count: 0 },
            { id: 2, name: 'running', count: 0 },
            { id: 3, name: 'coding', count: 0 },
        ]
    }

    handleIncrement = (habit) => {
        // console.log(`handleIncrement: ${habit.name}`)
        const habits = [...this.state.habits]
        //spread syntax로 로컬변수 habits array를 생성
        const index = habits.indexOf(habit)
        //Array api "indexOf"를 사용해서 인자로 받아온 habitdl 위치하는 인덱스를 찾는 로컬변수 index
        habits[index].count++
        this.setState({ habits: habits })
    }

    handleDecrement = (habit) => {
        console.log(`handleDecrement: ${habit.name}`)
        const habits = [...this.state.habits]
        const index = habits.indexOf(habit)
        const count = habits[index].count - 1
        habits[index].count = count < 0 ? 0 : count
        // smelly code??
        this.setState({ habits })
    }

    handleDelete = (habit) => {
        // console.log(`handleDelete: ${habit.name}`)
        // const habits = this.state.habits.filter(item => item.id !== habit.id)
        const habits = [...this.state.habits]
        const index = habits.indexOf(habit)
        habits.splice(index, 1)
        this.setState({ habits })
    }


    render() {

        return (
            <ul>
                {this.state.habits.map(habit =>
                    <Habit key={habit.id}
                        habit={habit}
                        onIncrement={this.handleIncrement}
                        onDecrement={this.handleDecrement}
                        onDelete={this.handleDelete} />
                )}
            </ul>
        );
    }
}

export default Habits;