import React, {useState} from "react";

function PlantCard(props) {
  const [inStock, setInStock ] = useState(true)
  const [price, setPrice] = useState(props.plant.price)


  function InStockClick(){
    setInStock(!inStock)
  }

  function deletePlant (){
    fetch(`http://localhost:6001/plants/${props.plant.id}`, {
      method: "DELETE"
    })
    .then(r=>r.json())
    .then(()=> props.handleDelete(props.plant.id))
  }

  // Advanced deliverables Change won't happen in database until you click on form button 
  function priceChange(e){
    e.preventDefault()
    fetch(`http://localhost:6001/plants/${props.plant.id}`, {
      method: "PATCH",
      headers: {
        "content-Type": "application/json"
      },
      body: JSON.stringify({
        price: parseFloat(price)
      })
    })
  }

  return (
    <li className="card">
      <img src={props.plant.image} alt={"plant name"} />
      <h4>{props.plant.name}</h4>
      <p>Price: {price}</p>
      <form onSubmit={priceChange}> 
        <input
          value={price}
          type="number"
          name="price"
          step="0.01"
          onChange={(e)=> setPrice(e.target.value)}
        />
        <button type="submit">Submit Price Change</button>
      </form>
      {inStock ? (
        <button onClick={InStockClick} className="primary">In Stock</button>
      ) : (
        <button onClick={InStockClick} >Out of Stock</button>
      )}
      <br></br>
      <button onClick={deletePlant}>Delete</button>
    </li>
  );
}

export default PlantCard;
