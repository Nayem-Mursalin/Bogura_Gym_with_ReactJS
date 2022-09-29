import React, { useEffect, useState } from 'react';
import Calculation from '../Calculation/Calculation';
import './List.css';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const List = (props) => {

    const notify = () => toast("Oww! Great Job!");

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

    }
    let newTime = 0;
    const handleBreakTime = (mytime) => {
        newTime = mytime;
        setTime(newTime);
    }
    return (
        <div className='list'>

            <div className='my-info'>
                <img src='../../images/bogura-gym-logo.jpeg' alt='Nayem'></img>
                <div>
                    <h3>Md. Nabiul Islam Pranto.</h3>
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
            <h3>Excercise time: {totalTime} sec</h3>
            <h3>Break time: {time} sec</h3>
            <div>
                <button onClick={notify}>Activity Completed</button>
                <ToastContainer />
            </div>
        </div>
    );
};

export default List;