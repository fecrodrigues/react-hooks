import React, { useState } from 'react';


export default () => {

    const [counter, setCounter] = useState(0);

    return (
        <>
            <p>Contador: {counter}</p>
            <button type="button" onClick={() => setCounter(counter + 1)} >Somar contador</button>
        </>
    )

}