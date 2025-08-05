import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import useGlobalReducer from "../hooks/useGlobalReducer";
import SingleImg from "../assets/img/800x600.png";

export const Single = props => {

  const { store } = useGlobalReducer()

  const { theId } = useParams()
  const character = store.people.find(person => person.uid === theId);

  return (
    <div className="container mt-5">
      <div className="row align-items-center">

        <div className="col-md-6 text-center mb-2">
          <img
            src={SingleImg}
            className="img-fluid"
            style={{ maxHeight: "600px" }}
            alt={character?.name}
          />
        </div>

        <div className="col-md-6">
          <h1 className="display-4 fw-semibold text-center">{character?.name}</h1>
          <p className="mt-3 lh-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non leo eu leo aliquet tincidunt et lobortis sapien. Nam sollicitudin nulla sapien, ut laoreet dui pretium vel. Sed a lectus dapibus, laoreet lectus ac, varius elit. Quisque lobortis eros nunc, cursus efficitur libero tempor sed. Mauris vulputate lorem nec massa egestas pharetra. Duis lacinia volutpat turpis. Mauris ac erat vitae justo molestie sodales. Quisque ultricies dapibus aliquam. Aliquam tincidunt imperdiet ante vel tempus. Aenean enim nisl, porta eget purus et, sollicitudin maximus leo.
          </p>
          <div className="text-end mt-5 pt-5">
            <Link to="/" className="btn btn-primary btn-sm">
              Back home
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

Single.propTypes = {
  match: PropTypes.object
};
