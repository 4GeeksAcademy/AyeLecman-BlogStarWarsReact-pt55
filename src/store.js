export const initialStore = () => ({
  people: [],
  planets: [],
  starships: [],
  favorites: []
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

    case "add_to_favorites":
      return {
        ...store,
        favorites: [...store.favorites, action.payload]
      };
    
    case "delete_favorites":
      return {
        ...store,
        favorites: store.favorites.filter(f => f.uid !== action.payload.uid)
      };

    default:
      return store;
  }
};

export default storeReducer;