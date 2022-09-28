import React from 'react';
import './List.css';

const List = (props) => {
    const { list } = props;
    return (
        <div className='list'>
            <h2>Right part</h2>
            <h4> Lenght : {list.length}</h4>
        </div>
    );
};

export default List;