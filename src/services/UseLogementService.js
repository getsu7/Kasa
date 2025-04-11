import logements from "./mockLogements.json"
export const useLogementService = () => {
  const getLogements = () => {
    return logements
  }

  return {
    getLogements
  }
}
