const URL = 'http://localhost:5173/data/mockLogements.json';


export const UseLogementService = () => {

  const getLogements = async () => {
    try {
      return await fetch(URL);
    } catch (e) {
      throw new Error('Erreur lors de la récupération des logements : ' + e);
    }
  };

  const getLogementById = async (id) => {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      return data.find(logement => logement.id === id);
    } catch (e) {
      throw new Error('Erreur lors de la récupération du logement : ' + e);
    }
  };

  return {
    getLogements,
    getLogementById
  };
};
