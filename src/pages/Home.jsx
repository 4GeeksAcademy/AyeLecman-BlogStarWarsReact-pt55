import starship from "../assets/img/starship.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useFetchData } from "../hooks/useFetchData.jsx";

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
			<p className="text-center">
				<img src={starship} />
			</p>

			<div className="mt-5">
				<h1 className="text-danger mb-3">Characters</h1>
				<div className="d-flex overflow-auto gap-3 py-2">
					{store.people.map((person) => (
						<div className="card" style={{ minWidth: "18rem" }} key={person.uid}>
							<img src="src/assets/img/400x200.png" className="card-img-top" />
							<div className="card-body">
								<h5 className="card-title">{person.name}</h5>
								<p className="mb-0">ID: {person.uid}</p>
								<p className="mb-0"> Lorem ipsum </p>
								<p> Lorem ipsum </p>
								<div className="d-flex justify-content-between">
									<Link to={`/single/${person.uid}`} className="btn btn-outline-primary">Learn More!</Link>
									<button className="btn btn-outline-warning" onClick={() => {
										if (!store.favorites.some(f => f.uid === person.uid)) {
											dispatch({ type: "add_to_favorites", payload: { ...person, type: "person" } });
										}
									}}><i className={`bi ${store.favorites.some(f => f.uid === person.uid && f.type === "person") ? "bi-heart-fill" : "bi-heart"}`}></i></button>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>

			<div className="mt-5">
				<h1 className="text-danger mb-3">Planets</h1>
				<div className="d-flex overflow-auto gap-3 py-2">
					{store.planets.map((planet) => (
						<div className="card" style={{ minWidth: "18rem" }} key={planet.uid}>
							<img src="src/assets/img/400x200.png" className="card-img-top" />
							<div className="card-body">
								<h5 className="card-title">{planet.name}</h5>
								<p className="mb-0">ID: {planet.uid}</p>
								<p className="mb-0"> Lorem ipsum </p>
								<p> Lorem ipsum </p>
								<div className="d-flex justify-content-between">
									<Link to={`/single/${planet.uid}`} className="btn btn-outline-primary">Learn More!</Link>
									<button className="btn btn-outline-warning" onClick={() => {
										if (!store.favorites.some(f => f.uid === planet.uid)) {
											dispatch({ type: "add_to_favorites", payload: { ...planet, type: "planet" } });
										}
									}}>
										<i className={`bi ${store.favorites.some(f => f.uid === planet.uid && f.type === "planet") ? "bi-heart-fill" : "bi-heart"}`}></i>
									</button>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>

			<div className="mt-5">
				<h1 className="text-danger mb-3">Starships</h1>
				<div className="d-flex overflow-auto gap-3 py-2">
					{store.starships.map((starship) => (
						<div className="card" style={{ minWidth: "18rem" }} key={starship.uid}>
							<img src="src/assets/img/400x200.png" className="card-img-top" />
							<div className="card-body">
								<h5 className="card-title">{starship.name}</h5>
								<p className="mb-0">ID:{starship.uid}</p>
								<p className="mb-0"> Lorem ipsum </p>
								<p> Lorem ipsum </p>
								<div className="d-flex justify-content-between">
									<Link to={`/single/${starship.uid}`} className="btn btn-outline-primary">Learn More!</Link>
									<button className="btn btn-outline-warning" onClick={() => {
										if (!store.favorites.some(f => f.uid === starship.uid)) {
											dispatch({ type: "add_to_favorites", payload: { ...starship, type: "starship" } });
										}
									}}><i className={`bi ${store.favorites.some(f => f.uid === starship.uid && f.type === "starship") ? "bi-heart-fill" : "bi-heart"}`}></i></button>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>



			{error && <p className="text-danger mt-3">{error}</p>}
		</div>
	);
}; 