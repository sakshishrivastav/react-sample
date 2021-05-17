import {CHANGE_POSITION} from './taskTypes'

const initialState = {
    columns: [{
        id:"todo",
        name: "To Do",
        tasks: [
            {id: "asdf0", priority: 1, title: "Task Zero", description: "Random description"}
        ]
    },{
        id:"inprogress",
        name: "In Progress",
        tasks: [
            {id: "asdf2", priority: 1, title: "Task One", description: "Random description"}, 
            {id: "asdf3", priority: 2, title: "Task Two", description: "Random description"}, 
            {id: "asdf4", priority: 2, title: "Task Three", description: "Random description"}, 
        ]
    },{
        id:"done",
        name: "Done",
        tasks: [
            {id: "asdf5", priority: 1, title: "Task Four", description: "Random description"}, 
            {id: "asdf6", priority: 1, title: "Task Five", description: "Random description"}, 
            {id: "asdf7", priority: 3, title: "Task Six", description: "Random description"}, 
        ]
    }]
}

const taskReducer = (state = initialState, { type, payload }) => {
    switch (type) {

    case CHANGE_POSITION:
        return { 
            ...state, 
            columns: payload
        }

    default:
        return state
    }
}

export default taskReducer;
