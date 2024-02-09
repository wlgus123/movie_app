import React from "react";

function Food({ name, picture }) {
  return (
    <div>
      <h1>I like {name}</h1>
      <img src={picture} alt="" width={300} />
    </div>
  );
}

const foodILike = [
  {
    name: "Kimchi",
    img:
      "https://www.koreanbapsang.com/wp-content/uploads/2019/11/DSC_0831-e1645400234347.jpg",
  },
  {
    name: "Samgyeopsal",
    img:
      "https://miro.medium.com/v2/resize:fit:1000/0*FJpFtXwW1RjmolYE.jpg",
  },
  {
    name: "Bibimbap",
    img:
      "https://upload.wikimedia.org/wikipedia/commons/4/44/Dolsot-bibimbap.jpg",
  },
  {
    name: "Doncasu",
    img:
      "https://www.marionskitchen.com/wp-content/uploads/2021/08/20201110_Spicy-Pork-Tonkatsu-5.jpg",
  },
  {
    name: "Kimbap",
    img:
      "https://christieathome.com/wp-content/uploads/2020/07/spicy-tuna-kimbap-2.jpg",
  },
];

function App() {
  return (
    <div>
      {foodILike.map((dish) => (
        <Food key={dish.name} name={dish.name} picture={dish.img} />
      ))}
    </div>
  )
}

export default App;