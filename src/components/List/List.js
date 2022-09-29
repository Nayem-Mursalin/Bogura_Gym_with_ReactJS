import React, { useEffect, useState } from 'react';
import Calculation from '../Calculation/Calculation';
import './List.css';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const List = (props) => {

    const notify = () => toast("Great Job! Your Workout is Successful");

    const [item, setItem] = useState([]);
    const [time, setTime] = useState([0]);
    useEffect(() => {
        fetch('time.json')
            .then(res => res.json())
            .then(data => setItem(data))
    }, [])

    const { list } = props;
    let totalTime = 0;
    for (const item of list) {
        totalTime = totalTime + item.time;
        localStorage.setItem("time", totalTime);
    }
    let newTime = 0;
    const handleBreakTime = (mytime) => {
        newTime = mytime;
        setTime(newTime);
        localStorage.setItem("breakTime", newTime);
    }
    return (
        <div className='list'>

            <div className='my-info'>
                <img src='https://img.freepik.com/free-photo/portrait-successful-man-having-stubble-posing-with-broad-smile-keeping-arms-folded_171337-1267.jpg?w=2000' alt='Man' className='my-img'></img>
                <div>
                    <h3>Md. Sayed Al Nayem</h3>
                    <p>Bogura, Bangladesh</p>
                </div>
            </div>
            <div>
                <table className='table-1'>
                    <tbody>
                        <tr>
                            <td>
                                <h3>75KG</h3>
                            </td>
                            <td>
                                <h3>6'0"</h3>
                            </td>
                            <td>
                                <h3>22yrs</h3>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>Weight</p>
                            </td>
                            <td>
                                <p>Height</p>
                            </td>
                            <td>
                                <p>Age</p>
                            </td>
                        </tr>
                    </tbody>

                </table>
            </div>

            <div>
                <h2>Add a Break</h2>
            </div>
            <div>
                <div className='break-time-list'>
                    {
                        item.map(items =>
                            <Calculation
                                key={items.id}
                                time={items.time}
                                handleBreakTime={handleBreakTime}
                            ></Calculation>
                        )
                    }
                </div>
            </div>
            <h2>Excersise Details</h2>
            <h3>
                Excercise time:{" "}
                {localStorage.getItem("time") ? localStorage.getItem("time") : 0} sec
            </h3>
            <h3>
                Break time:{" "}
                {localStorage.getItem("breakTime")
                    ? localStorage.getItem("breakTime")
                    : 0}
                sec
            </h3>
            <div>
                <button onClick={notify} className='actv-btn'>Activity Completed</button>
                <ToastContainer />
            </div>
        </div>
    );
};

export default List;