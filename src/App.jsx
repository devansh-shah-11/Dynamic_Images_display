import React, { useState, useEffect } from 'react';
import Counter from './Counter';


function App() {
    const [appCounter, setAppCounter] = useState(1);
    const [data, setData] = useState(null);

    const handleCounterChange = (newCounterValue) => {
        console.log('Counter in App.jsx:', newCounterValue);
        setAppCounter(newCounterValue);
    };

    useEffect(() => {
        let url = `https://dog.ceo/api/breeds/image/random/${appCounter}`;
        fetch(url)
            .then(response => response.json())
            .then(json => setData(json))
            .catch(error => console.error(error));
    }, [appCounter]);

    useEffect(() => {
        console.log(data);
    }, [data]);

    return (
        <div>
            <h1>App Counter: {appCounter}</h1>
            <Counter onCounterChange={handleCounterChange} />
            <h1>Dogs</h1>
            {data && data.message.map((url, index) => (
                <div key={index}>
                    <img src={url} alt={`Dog ${index + 1}`} />
                </div>
            ))}
        </div>
    );
}

export default App;