function Student(props){
    return(
        <div class="card">
            <h2>Name : {props.name}</h2>
            <h3>Age: {props.age}</h3>
            <p>Desc: {props.desc}</p>
        </div>
    );
}

export default Student;