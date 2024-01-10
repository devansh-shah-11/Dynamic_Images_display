import React, { useState, useEffect } from 'react';

function App() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random/2')
        .then(response => response.json())
        .then(json => setData(json))
        .catch(error => console.error(error));
    }, []);

    console.log(data);

    return (
        <div>
            <h1>Dogs</h1>
            {data && data.message.map((url, index) => (
                <img key={index} src={url} alt="dog" />
            ))}
        </div>
    );
}

export default App;