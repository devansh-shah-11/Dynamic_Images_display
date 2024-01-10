import React, { useState, useEffect } from 'react';

function App() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(json => setData(json))
        .catch(error => console.error(error));
    }, []);

    console.log(data);
    
    return (
        <div>
            <img src={data && data.message} alt="dog" />
        </div>
    );
}

export default App;