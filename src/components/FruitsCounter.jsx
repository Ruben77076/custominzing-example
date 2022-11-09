
function FruitsCounter(props) {
    var fruits = props.fruits.length;
    return (
        <h2 style={{textAlign:"center"}}>Total fruits: {fruits}</h2>
    )
}

export default FruitsCounter;