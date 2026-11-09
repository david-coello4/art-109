import React from 'react';
import ReactDOM from 'react-dom';
import './styles/dark-theme.css';
import Navbar from './components/Navbar';
import Feed from './components/Feed';

const App = () => {
    return (
        <div>
            <Navbar />
            <Feed />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));