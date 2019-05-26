import React, { useState } from 'react';

export function AddTask() {
    const [task, setTask] = useState('');
    
    return (
        <div className="add-task">

            <textarea
                id="new-task-content"
                placeholder="Wpisz treść zadania..."
                rows="3"
                onChange={ onChange }
                value={ task }>
            </textarea>

            <button
                id="add-task"
                onClick={ onClick }>
                Dodaj zadanie
            </button>

            {/* <div className="sort">
                <label>Sort </label>
                <select id="sort">
                    <option value="sortDefault">domyślnie</option>
                    <option value="sortAZ">od A do Z</option>
                    <option value="sortZA">od Z do A</option>
                </select>
            </div> */}

        </div>
    )

    function onClick() {
        if (!task) { return; }
        // props.onAdd(task);
        setTask('');
    }

    function onChange(e) {
        const { value } = e.target;
        setTask(value);
        console.log(e.target);
    }
}