// src/App.jsx
import "./App.css";
import { useState, useEffect } from "react";
import { starshipData } from "./Services/GetData";
import { StarshipList } from "./components/StarshipList/StarshipList";
import { StarshipSearch } from "./components/StarshipSearch/StarshipSearch";

const App = () => {
  const [starshipsData, setStarshipsData] = useState([]);
  const [displayedStarships, setDisplayedStarships] = useState([
    { name: "", class: "", model: "", manufacturer: "" },
  ]);

  useEffect(() => {
    const fetchDefaultData = async () => {
      const data = await starshipData();
      console.log("data:", data);

      setDisplayedStarships(data);
    };
    fetchDefaultData();
  }, []);

  // useEffect(() => {
  //   const fetchAllStarships = async () => {
  //     try {
  //       const data = await starshipData();
  //       console.log("data:", data);

  //       const formattedStarships = data.map((starship) => ({
  //         name: starship.name,
  //         class: starship.starship_class,
  //         model: starship.model,
  //         manufacturer: starship.manufacturer,
  //       }));

  //       // setStarshipsData(formattedStarships); // Store the complete formatted list
  //       // setDisplayedStarships(formattedStarships); // Initially display all of them
  //     } catch (error) {
  //       console.error("Failed to fetch all starships:", error);
  //       setStarshipsData([]);
  //       setDisplayedStarships([]);
  //     }
  //   };

  //   fetchAllStarships();
  // }, []);

  return (
    <>
      <h1>Star Wars API</h1>
      <StarshipSearch />
      <section>
        <StarshipList starships={displayedStarships} />
      </section>
    </>
  );
};

export default App;
