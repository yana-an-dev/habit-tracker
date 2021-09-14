import React, { memo } from 'react';

const HabitAddForm = memo((props) => {
    const inputRef = React.createRef()
    const onSubmit = (event) => {
        event.preventDefault()
        const name = inputRef.current.value
        name && props.onAdd(name)
        // if name exists, name will be passed to onAdd
        inputRef.current.value = ""
    }

    return (
        <form className="add-form"
            onSubmit={onSubmit}>
            <input
                ref={inputRef}
                className="add-input"
                type="text"
                placeholder="Habit"
            >
            </input>
            <button className="add-btn">Add</button>
        </form>
    )
})

export default HabitAddForm;


