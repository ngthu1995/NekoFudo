import React from "react";
import "./PetList.css";
import Pet from "../Pet/Pet";
//Images
import maki from "../../img/maki.png";
import mochi from "../../img/mochi.png";
import nigiri from "../../img/nigiri.png";
import onigiri from "../../img/onigiri.png";
import ramen from "../../img/ramen.png";
import taiyaki from "../../img/taiyaki.png";
import temaki from "../../img/temaki.png";
import tempura from "../../img/tempura.png";

const petInfo = [
  {
    id: 1,
    name: "Maki Cat",
    species: "Maki",
    image: maki,
    weight: 3
  },
  {
    id: 2,
    name: "Mochi Cat",
    species: "Mochi",
    image: mochi,
    weight: 15
  },
  {
    id: 3,
    name: "Nigiri Cat",
    species: "nigiri",
    image: nigiri,
    weight: 5
  },
  {
    id: 4,
    name: "Onigiri Cat",
    species: "Onigiri",
    image: onigiri,
    weight: 10
  },
  {
    id: 5,
    name: "Ramen Cat",
    species: "Ramen",
    image: ramen,
    weight: 6
  },
  {
    id: 6,
    name: "Taiyaki Cat",
    species: "Taiyaki",
    image: taiyaki,
    weight: 3
  },
  {
    id: 7,
    name: "Temaki Cat",
    species: "Temaki",
    image: temaki,
    weight: 3
  },
  {
    id: 8,
    name: "Tempura Cat",
    species: "Tempura",
    image: tempura,
    weight: 3
  }
];

const PetList = ({ handleClick }) => (
  <div className="pet-list">
    {petInfo.map(({ name, image, id, species, weight }) => (
      <Pet
        key={id}
        name={name}
        image={image}
        handleClick={handleClick}
        species={species}
        weight={weight}
      />
    ))}
  </div>
);

export default PetList;
