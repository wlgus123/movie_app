import React from "react";

function Food({ name, picture }) {
  return (
    <div>
      <h2>I like {name}</h2>
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
  },
  {
    id: 2,
    name: "Samgyeopsal",
    img:
      "https://miro.medium.com/v2/resize:fit:1000/0*FJpFtXwW1RjmolYE.jpg",
  },
  {
    id: 3,
    name: "Bibimbap",
    img:
      "https://upload.wikimedia.org/wikipedia/commons/4/44/Dolsot-bibimbap.jpg",
  },
  {
    id: 4,
    name: "Doncasu",
    img:
      "https://www.marionskitchen.com/wp-content/uploads/2021/08/20201110_Spicy-Pork-Tonkatsu-5.jpg",
  },
  {
    id: 5,
    name: "Kimbap",
    img:
      "https://christieathome.com/wp-content/uploads/2020/07/spicy-tuna-kimbap-2.jpg",
  },
];

function App() {
  return (
    <div>
      {foodILike.map((dish) => (
        <Food key={dish.id} name={dish.name} picture={dish.img} />
      ))}
    </div>
  )
}

export default App;