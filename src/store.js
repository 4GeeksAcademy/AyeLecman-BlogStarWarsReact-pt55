export const initialStore = () => ({
  people: [],
  planets: [],
  starships: []
});

const storeReducer = (store, action) => {
  switch (action.type) {
    
    case "load_people":
      return {
        ...store,
        people: action.payload,
      };
    
    case "load_planets":
      return {
        ...store,
        planets: action.payload,
      };

    case "load_starships":
      return {
        ...store,
        starships: action.payload,
      };

    default:
      return store;
  }
};

export default storeReducer;