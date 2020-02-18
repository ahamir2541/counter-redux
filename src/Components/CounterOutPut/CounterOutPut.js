import React from 'react';
import './CounterOutPut.css'

const CounterOutPut = (props) => {
    return (
        <div className="CounterOutPut">
            Current Counter : {props.value}
        </div>
    );
};

export default CounterOutPut;