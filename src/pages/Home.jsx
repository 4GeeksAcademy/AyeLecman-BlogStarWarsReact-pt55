import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useEffect, useState } from "react";
import { useFetchData } from "../hooks/useFetchData.jsx";
import { CardList } from "../components/CardList";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	const [error, setError] = useState("");

	const { loadPeople, loadPlanets, loadStarships } = useFetchData(dispatch, setError);

	useEffect(() => {
		loadPeople();
		loadPlanets();
		loadStarships();
	}, []);

	////////////////////////////////////////////////////////////////////////////////////////////
	return (
		<div className="mt-5 px-5 mx-5">
		<CardList title="Characters" type="people" data={store.people} store={store} dispatch={dispatch} />
		<CardList title="Planets" type="planets" data={store.planets} store={store} dispatch={dispatch} />
		<CardList title="Starships" type="starships" data={store.starships} store={store} dispatch={dispatch} />
		{error && <p className="text-danger mt-3">{error}</p>}
	</div>
	);
};