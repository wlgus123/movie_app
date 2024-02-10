import React from "react";
import PropTypes from "prop-types";

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} width={300} />
    </div>
  );
}

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    img:
      "https://www.koreanbapsang.com/wp-content/uploads/2019/11/DSC_0831-e1645400234347.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Samgyeopsal",
    img:
      "https://miro.medium.com/v2/resize:fit:1000/0*FJpFtXwW1RjmolYE.jpg",
    rating: 5,
  },
  {
    id: 3,
    name: "Bibimbap",
    img:
      "https://upload.wikimedia.org/wikipedia/commons/4/44/Dolsot-bibimbap.jpg",
    rating: 4.9,
  },
  {
    id: 4,
    name: "Doncasu",
    img:
      "https://www.marionskitchen.com/wp-content/uploads/2021/08/20201110_Spicy-Pork-Tonkatsu-5.jpg",
    rating: 4.5,
  },
  {
    id: 5,
    name: "Kimbap",
    img:
      "https://christieathome.com/wp-content/uploads/2020/07/spicy-tuna-kimbap-2.jpg",
    rating: 5,
  },
];

function App() {
  return (
    <div>
      {foodILike.map((dish) => (
        <Food key={dish.id} name={dish.name} picture={dish.img} rating={dish.rating} />
      ))}
    </div>
  )
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,
}

export default App;