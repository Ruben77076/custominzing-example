

function Fruits(props) {
    var fruits = props.fruits;
    

    return (
        <div style={{textAlign:"center"}}>
            {fruits.map(f => <p key={f.id}>{f.fruitName}</p>)}
        </div>
    )
}

export default Fruits