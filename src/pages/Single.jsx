import { Link, useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useEffect, useState } from "react";
import peoplePlaceholder from "../assets/img/PeoplePic.png";
import planetsPlaceholder from "../assets/img/PlanetPic.png";
import starshipsPlaceholder from "../assets/img/StarshipPic.png";

export const Single = props => {

  const { store } = useGlobalReducer()

  const { type, theId } = useParams()

  const item = store[type]?.find(el => el.uid === theId);

  const [itemDetails, setItemDetails] = useState(null);

  const placeholderMap = {
    people: peoplePlaceholder,
    planets: planetsPlaceholder,
    starships: starshipsPlaceholder
  };

  useEffect(() => {
    fetch(`https://www.swapi.tech/api/${type}/${theId}`)
      .then(res => res.json())
      .then(data => {
        setItemDetails(data.result.properties);
      })
      .catch(() => {
        setItemDetails(null);
      });
  }, [type, theId]);

  const displayConfig = {
    people: [
      { label: "Gender", key: "gender" },
      { label: "Skin Color", key: "skin_color" },
      { label: "Hair Color", key: "hair_color" },
      { label: "Height", key: "height" },
      { label: "Eye Color", key: "eye_color" },
      { label: "Birth Year", key: "birth_year" },
    ],
    planets: [
      { label: "Climate", key: "climate" },
      { label: "Population", key: "population" },
      { label: "Orbital Period", key: "orbital_period" },
      { label: "Rotation Period", key: "rotation_period" },
      { label: "Diameter", key: "diameter" },
      { label: "Terrain", key: "terrain" },
    ],
    starships: [
      { label: "Cargo Capacity", key: "cargo_capacity" },
      { label: "Passengers", key: "passengers" },
      { label: "Max Speed", key: "max_atmosphering_speed" },
      { label: "Crew", key: "crew" },
      { label: "Length", key: "length" },
      { label: "Model", key: "model" },
    ],
  };

  return (
    <div className="container mt-5">
      <div className="row align-items-center">

        <div className="col-md-6 text-center mb-2">
          <img
            src={`https://github.com/breatheco-de/swapi-images/blob/master/public/images/${type}/${theId}.jpg?raw=true`}
            className="img-fluid"
            style={{ maxHeight: "600px" }}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = placeholderMap[type];
            }}
          />
        </div>

        <div className="col-md-6">
          <h1 className="display-4 fw-semibold text-center">{item?.name}</h1>
          <p className="mt-3 lh-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non leo eu leo aliquet tincidunt et lobortis sapien. Nam sollicitudin nulla sapien, ut laoreet dui pretium vel. Sed a lectus dapibus, laoreet lectus ac, varius elit. Quisque lobortis eros nunc, cursus efficitur libero tempor sed. Mauris vulputate lorem nec massa egestas pharetra. Duis lacinia volutpat turpis. Mauris ac erat vitae justo molestie sodales. Quisque ultricies dapibus aliquam. Aliquam tincidunt imperdiet ante vel tempus. Aenean enim nisl, porta eget purus et, sollicitudin maximus leo.
          </p>
        </div>
      </div>

      <hr style={{ color: "red" }} />

      <div className="row text-danger text-center mt-5 border-top pt-3 fw-semibold">
        {displayConfig[type]?.map((info, i) => (
          <div className="col-md-2" key={`${type}-${i}`}>
            <p>{info.label}</p>
            <p>{itemDetails?.[info.key]}</p>
          </div>
        ))}
      </div>




      <div className="text-end mt-5 pt-5">
        <Link to="/" className="btn btn-primary btn-sm">
          Back home
        </Link>
      </div>
    </div>
  );
};

