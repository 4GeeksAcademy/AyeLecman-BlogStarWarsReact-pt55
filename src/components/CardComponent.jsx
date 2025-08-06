import { Link } from "react-router-dom";
import placeholderImg from "../assets/img/400x200.png";

export const CardComponent = ({ item, type, store, dispatch }) => {
	const isFavorite = store.favorites.some(f => f.uid === item.uid && f.type === type);

	const handleFavoriteClick = () => {
		if (!isFavorite) {
			dispatch({ type: "add_to_favorites", payload: { ...item, type } });
		}
	};

	return (
		<div className="card" key={item.uid}>
			<img 
			src={`https://github.com/breatheco-de/swapi-images/blob/master/public/images/${type}/${item.uid}.jpg?raw=true`} 
			onError={(e) => { e.target.src = placeholderImg; }}
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