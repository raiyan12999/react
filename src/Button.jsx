function Button(){

    const handleClick = () => {
        console.log("Stop clicking me bro!");
        document.getElementById("s").innerHTML = "<button>OUCH!</button>";
        
    };

    return (<button id ="s" onClick={handleClick}>click me</button>);
}

export default Button;