import { StarshipCard } from "../StarshipCard/StarshipCard";

const StarshipList = ({ starships }) => {
  return (
    <>
      <ul>
        {starships.map((starship) => (
          <li key={starship.name}>
            <h3>Name: {starship.name}</h3>
            <p>Manufacturer: {starship.manufacturer}</p>
            <p>Class: {starship.class}</p>
            <p>Model: {starship.model}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export { StarshipList };
