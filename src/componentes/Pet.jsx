function Pet(props){
    return(
    <section className="section">
        <h2>{props.nombre} </h2>
        <p>{props.color} </p>
        <p>{props.edad} </p>
        
    </section>
    )
}

export default Pet;