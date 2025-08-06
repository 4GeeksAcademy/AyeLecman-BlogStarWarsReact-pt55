import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import logo from "../assets/img/Logo.png";

export const Navbar = () => {

	const { store, dispatch } = useGlobalReducer()

	return (
		<nav className="navbar navbar-light bg-light px-5 mt-1 sticky-top w-100">
			<div className="container-fluid d-flex justify-content-between align-items-center">
				<Link to="/">
					<img
						src={logo}
						className="navbar-brand navbar-logo"
					/>
				</Link>
				<div className="me-5">
					<div className="dropdown">
						<button className="btn btn-light dropdown-toggle btn-lg border border-dark" type="button" data-bs-toggle="dropdown">
							Favorites
							<span className="badge text-bg-secondary ms-2 bg-success">{store.favorites.length}</span>
						</button>
						<ul className="dropdown-menu">
							{store.favorites.length === 0 ?
								(<li><span className="dropdown-item text-muted">No favorites</span></li>) :
								(store.favorites.map(fav => (
									<li key={`${fav.type}-${fav.uid}`} className="d-flex justify-content-between align-items-center px-2 mt-1">
										<Link to={`/single/${fav.type}/${fav.uid}`} className="dropdown-item p-0 me-2 text-decoration-underline">
											{fav.name}
										</Link>
										<button
											className="btn btn-sm btn-outline-danger"
											onClick={(e) => {
												e.stopPropagation();
												dispatch({ type: "delete_favorites", payload: fav })}}
										>
											<i className="bi bi-trash"></i>
										</button>
									</li>
								))
								)}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};