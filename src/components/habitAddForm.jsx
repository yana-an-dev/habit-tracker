import React, { Component, useImperativeHandle } from 'react';

class HabitAddForm extends Component {
    inputRef = React.createRef()
    onSubmit = (event) => {
        event.preventDefault()
        const name = this.inputRef.current.value
        name && this.props.onAdd(name)
        // if name exists, name will be passed to onAdd
        this.inputRef.current.value = ""
    }

    render() {
        return (
            <form className="add-form"
                onSubmit={this.onSubmit}>
                <input
                    ref={this.inputRef}
                    className="add-input"
                    type="text"
                    placeholder="Habit"
                >
                </input>
                <button className="add-btn">Add</button>

            </form>
        );
    }
}

export default HabitAddForm;