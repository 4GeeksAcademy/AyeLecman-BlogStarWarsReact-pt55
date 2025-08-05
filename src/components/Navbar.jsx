import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import logo from "../assets/img/Logo.png";

export const Navbar = () => {

	const { store, dispatch } = useGlobalReducer()

	return (
		<nav className="navbar navbar-light bg-light px-5 mx-5 mt-3 sticky-top ">
			<div className="container-fluid d-flex justify-content-between align-items-center">
				<Link to="/">
					<img
						src={logo}
						className="navbar-brand"
						style={{ height: "80px" }}
					/>
				</Link>
				<div className="me-5">
					<div className="dropdown">
						<button className="btn btn-primary dropdown-toggle btn-lg" type="button" data-bs-toggle="dropdown">
							Favorites
							<span className="badge text-bg-secondary ms-2">{store.favorites.length}</span>
						</button>
						<ul className="dropdown-menu">
							{store.favorites.length === 0 ?
								(<li><span className="dropdown-item text-muted">No favorites</span></li>) :
								(store.favorites.map(fav => (
									<li key={fav.uid} className="d-flex justify-content-between align-items-center px-2 mt-1">
										<Link to={`/single/${fav.uid}`} className="dropdown-item p-0 me-2">
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