function Button(){

    const handleClick = () => alert("Ouch!");

    return (<button onClick={handleClick}>click me</button>);
}

export default Button;