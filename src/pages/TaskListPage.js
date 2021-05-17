import React from 'react'
import {connect} from 'react-redux'
import { DragDropContext } from "react-beautiful-dnd";
import {Link} from "react-router-dom";

import Column from '../components/Column'
import NavBar from '../components/Navbar'
import {changePosition} from '../redux'

const TaskListPage = ({columns, changePosition}) => {

    const onDragEnd = result => {
        // return if item was dropped outside
        if (!result.destination) return;
        // return if the item was dropped in the same place
        if (
        result.source.droppableId === result.destination.droppableId &&
        result.source.index === result.destination.index
        ) return;

        const newColumns = JSON.parse(JSON.stringify(columns));
        const droppedFrom = newColumns.findIndex(col => col.id === result.source.droppableId);
        const droppedInto = newColumns.findIndex(col => col.id === result.destination.droppableId);
        const draggedItem = newColumns[droppedFrom].tasks[result.source.index];
        //Delete Item in source
        newColumns[droppedFrom].tasks.splice(result.source.index, 1);
        //Update Item in Destination
        newColumns[droppedInto].tasks.splice(result.destination.index, 0, draggedItem);
        changePosition(newColumns);
    };

    return (
        <div id="taskPage" className="d-flex h-100 flex-lg-row flex-sm-col">
            <NavBar showMobileMenu/>
            <div className="flex-grow-1">
                <div id="tasks" className="container-fluid">
                    <div className="row py-2 bg-light-grey d-none d-lg-block">
                        <div className="col p-2 d-flex justify-content-end">
                            <Link to="/create" type="button" className="btn text-white bg-green btn-sm">Add Task</Link>
                        </div>
                    </div>
                    <div className="row pt-4 px-2">
                        <DragDropContext onDragEnd={onDragEnd}>
                            {columns.map(col=><Column key={"col"+col.id} {...col} />)}
                        </DragDropContext>
                    </div>
                </div>
            </div>
        </div>
    )
}


const mapStateToProps = state =>{
    return {
        columns: state.tasks.columns
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        changePosition: updatedColumns => dispatch(changePosition(updatedColumns))
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TaskListPage);