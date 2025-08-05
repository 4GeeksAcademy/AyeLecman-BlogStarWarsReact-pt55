export const useFetchData = (dispatch, setError) => {
	const loadPeople = () => {
		fetch(`https://www.swapi.tech/api/people`)
			.then(res => res.json())
			.then(data => {
				dispatch({ type: "load_people", payload: data.results });
			})
			.catch(() => setError("Error al cargar personajes"));
	};

	const loadPlanets = () => {
		fetch(`https://www.swapi.tech/api/planets`)
			.then(res => res.json())
			.then(data => {
				dispatch({ type: "load_planets", payload: data.results });
			})
			.catch(() => setError("Error al cargar planetas"));
	};

	const loadStarships = () => {
		fetch(`https://www.swapi.tech/api/starships`)
			.then(res => res.json())
			.then(data => {
				dispatch({ type: "load_starships", payload: data.results });
			})
			.catch(() => setError("Error al cargar naves"));
	};

	return { loadPeople, loadPlanets, loadStarships };
};