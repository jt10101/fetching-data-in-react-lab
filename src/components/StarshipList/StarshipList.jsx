// src/components/StarshipList/StarshipList.jsx
// import { StarshipCard } from "../StarshipCard/StarshipCard"; // Keep if you use it

const StarshipList = ({ starships }) => {
  // console.log("Starships received in StarshipList:", starships); // For debugging

  if (!starships || starships.length === 0) {
    return <p>No starships to display.</p>;
  }

  return (
    <div>
      <h2>All Starships</h2> {/* Changed title for clarity */}
      <ul>
        {starships.map((starship) => (
          <li key={starship.name}>
            {/* If using StarshipCard, uncomment and pass the starship prop */}
            {/* <StarshipCard starship={starship} /> */}

            {/* Otherwise, render directly */}
            <h3>Name: {starship.name}</h3>
            <p>Manufacturer: {starship.manufacturer}</p>
            <p>Class: {starship.class}</p>
            <p>Model: {starship.model}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { StarshipList };
