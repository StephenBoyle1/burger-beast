import React from 'react';
import classes from './Toolbar.css';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <div>
            Menu
        </div>
        <div>
            Logo
            <nav>
                <ul>...</ul>
            </nav>
        </div>
    </header>
);

export default toolbar