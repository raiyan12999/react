import React, {useState} from "react";


function Mycomponent(){
    const [name, setName] = useState();

    

    const updateName = () => {
        setName("Afifa");
        console.log(name);
    };

    return (<div>
                <p>Name : {name}</p>
                <button onClick={updateName}>Click me</button>    
            </div>);
}

export default Mycomponent;