import { useState } from 'react';

export const TaskCreator = () => {
    const [newTaskName, setNewTaskName] = useState()

    const handleSumbit = (e) => {
        e.preventDefault();
        localStorage.setItem('Tarea', newTaskName);
        console.log.localStorage = alert('Saved');
        setNewTaskName('');
    };

    return (
        <form onSubmit={handleSumbit}>
            <input
                type='text'
                placeholder='Inserta una tarea'
                value={newTaskName}
                onChange={(e) => setNewTaskName(e.target.value)}
            />
            <button>Guardar Tarea</button>
        </form>
    );
};

export default TaskCreator;
