import React from 'react'
import { Droppable } from "react-beautiful-dnd";

import TaskItem from './TaskItem'

const getCardHeaderClasses = (id) =>{
    switch (id) {
        case 'todo':
            return 'bg-yellow';

        case 'inprogress':
            return 'bg-green text-white';
    
        default:
            return 'bg-blue text-white';
    }
}

function Columns({id, name, tasks}) {
    
    return (
        <div className="col-lg-4 col-sm-12 p-2">
            <div className="card task-container">
                <div className={`card-header text-center fw-bold ${getCardHeaderClasses(id)}`}>
                    {name}
                </div>
                <Droppable droppableId={id}> 
                    {provided => (
                        <div className="card-body" {...provided.droppableProps} ref={provided.innerRef}>
                            {tasks.map((task, i)=> <TaskItem key={'task'+task.id} {...task} position={i}/>)}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </div>
        </div>
    )
}

export default Columns
