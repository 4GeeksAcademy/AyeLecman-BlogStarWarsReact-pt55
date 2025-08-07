import { Link } from "react-router-dom";
import { CardComponent } from "./CardComponent";

export const CardList = ({ title, type, data, store, dispatch }) => (
	<div className="mt-5">
		<div className="d-flex justify-content-between align-items-center">
			<h1 className="text-danger mb-2">{title}</h1>
			<Link to={`/show-all/${type}`} className="btn btn-link">Show All</Link>
		</div>
		<div className="d-flex overflow-auto gap-3 py-2">
			{data.map(item => (
				<CardComponent
					key={item.uid}
					item={item}
					type={type}
					store={store}
					dispatch={dispatch}
				/>
			))}
		</div>
		<hr className="bg-danger border-2 border-top mt-4" />
	</div>
);