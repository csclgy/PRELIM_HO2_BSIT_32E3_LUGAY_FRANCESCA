import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Body from './components/body';
import ToDoList from './ToDoList';
import NavBar from './NavBar';
import PropsPage from './PropsPage';
import "./styles.css";

const App = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <div className='container mt-3'>
                <Routes>
                    <Route path="/" element={<h1 id='Highlight1'><center><PropsPage message="Hey it's cesca, welcome to my app!" /></center></h1>} />
                    <Route path="/body" element={<Body />} />
                    <Route path="/ToDoList" element={<ToDoList />} />
                </Routes>
                <PropsPage message="<3" />
            </div>
        </BrowserRouter>
    );
};

export default App;




