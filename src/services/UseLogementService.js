const URL = 'http://localhost:5173/data/mockLogements.json';


export const UseLogementService = () => {

  const getLogements = async () => {
    const response = await fetch(URL);
    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }
    return await response.json();
  };

  const getLogementById = async (id) => {
    const response = await fetch(URL);
    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    return data.find(logement => logement.id === id);
  };

  return {
    getLogements,
    getLogementById
  };
};
