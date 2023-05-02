/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import React from "react";

const ChefCard = ({ chef }) => {
  const { name } = chef;
  return <div>{name}</div>;
};

export default ChefCard;
