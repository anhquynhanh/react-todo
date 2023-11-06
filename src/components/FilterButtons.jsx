import React from 'react';
import './FilterButton.css';

function FilterButtons({ setFilter }) {
    return (
        <div>
            <button onClick={() => setFilter('all')}>All</button>
            <button onClick={() => setFilter('completed')}>Completed</button>
            <button onClick={() => setFilter('active')}>Active</button>
        </div>
    );
}

export default FilterButtons;
