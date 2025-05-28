const BASE_URL = `https://swapi.info/api/starships/`;

const starshipData = async () => {
  try {
    const res = await fetch(BASE_URL);
    const data = await res.json();
    console.log("Data:", data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

starshipData();

export { starshipData };
