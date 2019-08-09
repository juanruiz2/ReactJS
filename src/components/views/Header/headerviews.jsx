import React from 'react';

const headerViews = () => {
return (
    <div className="App">
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>

            hola a todos desde mi pagina
        
        </p>
        <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
        >
        Hola
        </a>
    </header>
    </div>
);
}

export default headerViews;