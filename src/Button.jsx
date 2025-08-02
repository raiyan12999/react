function Button(){

    const handleClick = () => {
        console.log("Stop clicking me bro!");
        return alert("Stop!");
    };

    return (<button onClick={handleClick}>click me</button>);
}

export default Button;