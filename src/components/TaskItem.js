import React from 'react'
import { Draggable } from "react-beautiful-dnd";


export default function TaskItem({title, description, id, position}) {
    return (
        <Draggable draggableId={id} index={position}>
            {provided => (
                <div className="card task" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <h6 className="card-subtitle mb-2 text-muted truncated">{description}</h6>
                    </div>
                </div>
            )}
        </Draggable>
    )
};
