import React from 'react';
import './App.css';
import { Todolist } from './Todolist';

function App() {


    const truck = "hi"
    const truckNew = "hello"

    const tasks1 = [
        { id: 1, title: "HTML&CSS", isDone: true },
        { id: 2, title: "JS", isDone: true },
        { id: 3, title: "ReactJS", isDone: false }
    ]
    const tasks2 = [
        { id: 1, title: "Hello world", isDone: true },
        { id: 2, title: "I am Happy", isDone: false },
        { id: 3, title: "Yo", isDone: false }
    ]

    return (
        <>
            <Todolist truck={truck} truck2={11} tasks={tasks1} />
            <Todolist truck={truckNew} truck3={true} tasks={tasks2} />
        </>
    );
}

export default App;
