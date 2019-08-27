import * as React from 'react';
import './App.css';
import Lights from './Components/Lights';

class App extends React.Component<{}, {}> {
    public render() {
        return (
            <div className="App">
                <header>
                    <h1>HUE Lights</h1>
                </header>
                <Lights />
            </div>
        );
    }
}

export default App;
