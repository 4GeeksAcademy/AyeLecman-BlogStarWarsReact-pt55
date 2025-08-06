import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useFetchData } from "../hooks/useFetchData.jsx";
import { CardComponent } from "../components/CardComponent.jsx";

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
			
			<div className="mt-5">
				<h1 className="text-danger mb-3">Characters</h1>
				<div className="d-flex overflow-auto gap-3 py-2">
					{store.people.map(person => (
						<CardComponent
							key={person.uid}
							item={person}
							type="people"
							store={store}
							dispatch={dispatch}
						/>
					))}
				</div>
			</div>

			<div className="mt-5">
				<h1 className="text-danger mb-3">Planets</h1>
				<div className="d-flex overflow-auto gap-3 py-2">
					{store.planets.map(planet => (
						<CardComponent
							key={planet.uid}
							item={planet}
							type="planets"
							store={store}
							dispatch={dispatch}
						/>
					))}
				</div>
			</div>

			<div className="mt-5">
				<h1 className="text-danger mb-3">Starships</h1>
				<div className="d-flex overflow-auto gap-3 py-2">
					{store.starships.map(starship => (
						<CardComponent
							key={starship.uid}
							item={starship}
							type="starships"
							store={store}
							dispatch={dispatch}
						/>
					))}
				</div>
			</div>

			{error && <p className="text-danger mt-3">{error}</p>}
		</div>
	);
};