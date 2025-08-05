import LogoImageUrl from "../assets/img/Logo.png";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useCallback, useEffect, useState } from "react";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	const [error, setError] = useState("");

	useEffect(() => {
		LoadPeople();
		LoadPlanets();
		LoadStarships();
	}, []);

	////////////////////////////////////////////////////

	const LoadPeople = () => {
		fetch(`https://www.swapi.tech/api/people?limit=100`)
			.then(res => res.json())
			.then(data => {
				dispatch({
					type: "load_people",
					payload: data.results,
				});
			})
			.catch(() => setError("Error al cargar personajes"));
	};

	///////////////////////////////////////////////////////

	const LoadPlanets = () => {
		fetch(`https://www.swapi.tech/api/planets?limit=100`)
			.then(res => res.json())
			.then(data => {
				dispatch({
					type: "load_planets",
					payload: data.results,
				});
			})
			.catch(() => setError("Error al cargar personajes"));
	};

	///////////////////////////////////////////////////////

	const LoadStarships = () => {
		fetch(`https://www.swapi.tech/api/starships?limit=100`)
			.then(res => res.json())
			.then(data => {
				dispatch({
					type: "load_starships",
					payload: data.results,
				});
			})
			.catch(() => setError("Error al cargar personajes"));
	};

	//////////////////////////////////////////////////////

	return (
		<div className="text-center mt-5">
			<h1>YOUR FAVOURITE BLOG</h1>
			<p>
				<img src={LogoImageUrl} />
			</p>

			<div>
				<h1>PERSONAJES</h1>
				<ul className="list-unstyled">
					{store.people.map((person) => (
						<li key={person.uid}>
							<strong>{person.name}</strong> (ID: {person.uid})
						</li>
					))}
				</ul>
			</div>

			<div>
				<h1>PLANETAS</h1>
				<ul className="list-unstyled">
					{store.planets.map((planet) => (
						<li key={planet.uid}>
							<strong>{planet.name}</strong> (ID: {planet.uid})
						</li>
					))}
				</ul>
			</div>

			<div>
				<h1>NAVES</h1>
				<ul className="list-unstyled">
					{store.starships.map((starship) => (
						<li key={starship.uid}>
							<strong>{starship.name}</strong> (ID: {starship.uid})
						</li>
					))}
				</ul>
			</div>



			{error && <p className="text-danger mt-3">{error}</p>}
		</div>
	);
}; 