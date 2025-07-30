function PropCard(props){

    let name = 'Raiyan';
    

    return (
        <div>
            <p>{name.toUpperCase()}</p>
            <p>{props.height}</p>
        </div>
    );
}

export default PropCard;