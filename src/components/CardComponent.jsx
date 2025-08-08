import { Link } from "react-router-dom";
import peoplePlaceholder from "../assets/img/PeoplePic.png";
import planetsPlaceholder from "../assets/img/PlanetPic.png";
import starshipsPlaceholder from "../assets/img/StarshipPic.png";

export const CardComponent = ({ item, type, store, dispatch }) => {
	const isFavorite = store.favorites.some(f => f.uid === item.uid && f.type === type);

	const handleFavoriteClick = () => {
		if (!isFavorite) {
			dispatch({ type: "add_to_favorites", payload: { ...item, type } });
		} else {
			dispatch({ type: "delete_favorites", payload: { ...item, type } });
		}
	};

	const placeholderMap = {
		people: peoplePlaceholder,
		planets: planetsPlaceholder,
		starships: starshipsPlaceholder
	};

	return (
		<div className="card" key={item.uid}>
			<img
				src={`https://github.com/breatheco-de/swapi-images/blob/master/public/images/${type}/${item.uid}.jpg?raw=true`}
				onError={(e) => {
					e.target.onerror = null;
					e.target.src = placeholderMap[type];
				}}
			/>
			<div className="card-body">
				<h5 className="card-title">{item.name}</h5>
				<p className="mb-0">ID: {item.uid}</p>
				<p className="mb-0"> Lorem ipsum </p>
				<p> Lorem ipsum </p>
				<div className="d-flex justify-content-between">
					<Link to={`/single/${type}/${item.uid}`} className="btn btn-outline-primary">Learn More!</Link>
					<button className="btn btn-outline-warning" onClick={handleFavoriteClick}>
						<i className={`bi ${isFavorite ? "bi-heart-fill" : "bi-heart"}`}></i>
					</button>
				</div>
			</div>
		</div>
	);
};