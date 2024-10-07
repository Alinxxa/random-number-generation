import { useState } from "react";
import Button0 from "./Button0";

function RandomNumber() {
    const [number, setNumber] = useState(generate());
    function changeNumber() {
        return setNumber(generate());
    }
    return (
        <div>
            <h1>{number}</h1>
            <Button0 changeNumber={changeNumber}/>
        </div>
    );
}
export default RandomNumber;

function generate() {
    return Math.floor(Math.random() * 10);
}

