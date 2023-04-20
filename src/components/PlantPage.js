import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(()=>{
    fetch(" http://localhost:6001/plants")
    .then(r=>r.json())
    .then(plant=> setPlants(plant))
  },[])

  function plantsFormSubmit(newPlant){
    setPlants([...plants, newPlant])
  }

  const filteredPlants = plants.filter(plant=> {
    return plant.name.toLowerCase().includes(searchQuery.toLowerCase())
  })

  function searchHandler(value){
    setSearchQuery(value)
  }

      //Advanced Deliverables

      function handleDelete(id){
        const filterPlants = plants.filter(plant => {
          return plant.id !== id
        })
        setPlants(filterPlants)
      }

  return (
    <main>
      <NewPlantForm plantsFormSubmit={plantsFormSubmit} />
      <Search searchQuery={searchQuery} searchHandler={searchHandler} />
      <PlantList plants={filteredPlants} handleDelete={handleDelete} />
    </main>
  );
}

export default PlantPage;
