function List(){
    const fruits = ["apple", "banana", "mango", "berry"];

    const fruitArray = fruits.map(fruit => <li>{fruit}</li>)

    return (
        <ul>
            <li>{fruitArray}</li>
        </ul>
    )
}

export default List;