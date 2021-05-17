import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Link, useHistory} from "react-router-dom";

import NavBar from '../components/Navbar'
import {useForm} from '../utils/useForm'
import {changePosition} from '../redux'

export default function AddTaskPage() {

    const {formData: task, handleField: setField } = useForm()
    const [branch, setBranch] = useState('todo');

    const history = useHistory();
    const columns = useSelector(state => state.tasks.columns);
    const dispatch = useDispatch();

    const submit = () =>{
        if(task.description?.length && task.title?.length){
            let updatedCols = [];
            columns.forEach(col => {
                if(col.id === branch){
                    col.tasks.push({
                        ...task,
                        priority: 1,
                        id: `task-${Date.now()}`
                    })
                }
                updatedCols.push(col);
            });
            dispatch(changePosition(updatedCols));
            reset()
            history.push("/")
        }
    }

    const reset = () =>{
        delete task.title;
        delete task.description;
        setBranch('todo')
        document.getElementById('create-task').reset();
    }

    return (
        <div className="d-flex flex-wrap flex-lg-row main-container" id="createTask">
            <NavBar />
            <div className="flex-grow-1">
                <div id="tasks" className="container-fluid">
                    <div className="row py-2 border-bottom darker">
                        <div className="col p-2 d-flex justify-content-start">
                            <div className="col p-2 d-flex">
                                <Link to='/' className="text-dark me-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="30" fill="currentColor" className="bi bi-arrow-left-short" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
                                    </svg>
                                </Link>
                                <h4>Create Task</h4>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-7 col-xl-5 p-40">
                            <form id="create-task">
                                <div className="form-group">
                                    <label className="text-black-50">Enter Task Name</label>
                                    <input name="title" type="text" className="form-control" placeholder="Task Name" onChange={setField} />
                                </div>
                                <div className="form-group">
                                    <label className="text-black-50">Enter Description</label>
                                    <textarea name="description" className="form-control" placeholder="Description" rows="3" onChange={setField} ></textarea>
                                </div>
                            </form>
                            <div>
                                <div>Branch To</div>
                                <ul className="branch pagination">
                                    <li className={`page-item ${branch === 'todo'? 'active': ''}`} onClick={()=>{setBranch('todo')}}><span className="page-link">To Do</span></li>
                                    <li className={`page-item ${branch === 'inprogress'? 'active': ''}`}  onClick={()=>{setBranch('inprogress')}}><span className="page-link">In Progress</span></li>
                                    <li className={`page-item ${branch === 'done'? 'active': ''}`}  onClick={()=>{setBranch('done')}}><span className="page-link">Done</span></li>
                                </ul>
                            </div>
                            <br/>
                            <div className="d-flex">
                                <button type="button" className="btn btn-outline-secondary" onClick={reset}>Cancel</button>
                                <button type="button" className="btn btn-success mx-2" onClick={submit}>Create</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}