import React, { useState, useEffect } from 'react';


function App() {
    const [data, setData] = useState(null);
    let digit = 5;
    let url = `https://dog.ceo/api/breeds/image/random/${digit}`;
    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(json => setData(json))
        .catch(error => console.error(error));
    }, []);

    console.log(data);

    return (
        <div>
            <h1>Dogs</h1>
            {data && data.message.map((url, index) => (
                <img key={index} src={url} alt={`Dog ${index + 1}`}  />
            ))}
        </div>
    );
}

export default App;