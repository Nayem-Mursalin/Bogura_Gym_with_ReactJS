import React, { useEffect, useState } from 'react';
import Calculation from '../Calculation/Calculation';
import './List.css';

const List = (props) => {
    //Added For testing
    const [item, setItem] = useState([]);
    const [time, setTime] = useState([]);
    useEffect(() => {
        fetch('time.json')
            .then(res => res.json())
            .then(data => setItem(data))
    }, [])
    console.log(item);

    //Testing Close

    const { list } = props;
    //console.log(list);
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
                    <h3>Md. Sayed Al Nayem</h3>
                    <p>Bogura, Bangladesh</p>
                    <h4> Lenght : {list.length}</h4>
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
            <h3>Excercise time: {totalTime}</h3>
            <h3>Break time: {time}</h3>
            <button className='acticity-btn'>
                <p>Activity Completed</p>
            </button>
        </div>
    );
};

export default List;