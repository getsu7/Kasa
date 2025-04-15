const URL = 'http://localhost:5173/data/mockLogements.json';


export const UseLogementService = () => {

  const getLogements = async () => {
    try {
      return await fetch(URL);
    } catch (e) {
      throw new Error('Erreur lors de la récupération des logements : ' + e);
    }
  };

  return {
    getLogements
  };
};
