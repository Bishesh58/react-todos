import React from 'react'

function FormTodo() {
    return (
        <div className="formTodo">
            <form>
                <input 
                type="text"
                placeholder="Enter your task"
                />
                <button>Add</button>
            </form>
        </div>
    )
}

export default FormTodo
