import React, { Component } from 'react';
import './app.css'
import Habits from './components/habits'
import Navbar from './components/navbar'

class App extends Component {

  state = {
    habits: [
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Writing', count: 0 }
    ]
  }

  handleIncrement = (habit) => {
    const habits = this.state.habits.map(item => {
      if (item.id === habit.id) {
        return { ...habit, count: habit.count + 1 }
      } return item
    })
    // const habits = [...this.state.habits]
    // const index = habits.indexOf(habit)
    // habits[index].count++
    this.setState({ habits: habits })
  }

  handleDecrement = (habit) => {

    const habits = this.state.habits.map(item => {
      if (item.id === habit.id) {
        const count = habit.count - 1
        return { ...habit, count: count < 0 ? 0 : count }
      } return item
    })
    // const habits = [...this.state.habits]
    // const index = habits.indexOf(habit)
    // const count = habits[index].count - 1
    // habits[index].count = count < 0 ? 0 : count
    // // smelly code??
    this.setState({ habits })
  }

  handleDelete = (habit) => {
    // console.log(`handleDelete: ${habit.name}`)
    const habits = this.state.habits.filter(item => item.id !== habit.id)
    // const habits = [...this.state.habits]
    // const index = habits.indexOf(habit)
    // habits.splice(index, 1)
    this.setState({ habits })
  }


  handleAdd = (name) => {

    const habits = [...this.state.habits,
    { id: Date.now(), name: name, count: 0 }]

    this.setState({ habits })
  }

  handleReset = () => {
    const habits = this.state.habits.map(habit => {
      // habit.count = 0
      // return habit
      if (habit.count !== 0) {
        return { ...habit, count: 0 } //새로운 habit object를 만들어서 변화 감지
      } return habit
    })
    this.setState({ habits })
  }

  render() {
    console.log('app')
    return (
      <>
        <Navbar totalCount={this.state.habits.filter(item => item.count > 0).length} />
        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onAdd={this.handleAdd}
          onReset={this.handleReset} />

      </ >
    )
  }
}



export default App;
