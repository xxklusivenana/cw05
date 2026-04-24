import React, { Component } from 'react';

let food = ["Apple", "Banana", "Carrot", "Broccoli", "Orange", "Spinach"];

class List extends Component {

    render() {
        return (
            <div className='list-container'>
                <ul>
                    {food.map((food, index) => (
                        <li key={index}>{food}</li>
                    ))}
                </ul>
            </div>
            

        );
    }
}

export default List;