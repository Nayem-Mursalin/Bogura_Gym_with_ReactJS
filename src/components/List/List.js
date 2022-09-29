import React from 'react';
import './List.css';

const List = (props) => {
    const { list } = props;
    console.log(list);
    let totalTime = 0;
    for (const item of list) {
        totalTime = totalTime + item.time;

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
                <h2>Add a Break</h2>
                <h1>Will Add Later</h1>
            </div>
            <div>
                <h1>Excersise Details</h1>
                <h3>Excercise time: {totalTime}</h3>
                <h3>Break time: </h3>
            </div>
        </div>
    );
};

export default List;