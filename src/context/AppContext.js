import React, { useContext, useState } from "react";

const header = {
  titleScreen: "",
  updateTitleScreen: () => {},
};
const movieList = {
  orderBy: "popular",
  updateOrderBy: () => {},
};

export const AppContext = React.createContext({
  titleScreen: header.titleScreen,
  updateTitleScreen: header.updateTitleScreen,
  orderBy: movieList.orderBy,
  updateOrderBy: movieList.updateOrderBy,
});
