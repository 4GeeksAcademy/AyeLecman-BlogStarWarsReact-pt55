import { Link, useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { CardComponent } from "../components/CardComponent";

export const ShowAll = () => {
  const { store, dispatch } = useGlobalReducer();
  const { type } = useParams();

  const items = store[type];

  return (
    <div className="container mt-5">
      <h1 className="text-danger mb-4 text-capitalize">All {type}</h1>

      <div className="row g-3">
        {items.map(item => (
          <div key={item.uid} className="col-12 col-sm-6 col-md-6 col-lg-3">
            <CardComponent
              item={item}
              type={type}
              store={store}
              dispatch={dispatch}
            />
          </div>
        ))}
      </div>

      <div className="mt-4 d-flex justify-content-end">
        <Link to="/" className="btn btn-primary">Back home</Link>
      </div>
    </div>
  );
};
