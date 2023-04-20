import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, handleDelete}) {

  const displayPlants = plants.map(plant => {
    return(
      <PlantCard
      key={plant.id}
      plant={plant}
      handleDelete={handleDelete}
    />
    )
  })
  return (
    <ul className="cards">{displayPlants}</ul>
  );
}

export default PlantList;
