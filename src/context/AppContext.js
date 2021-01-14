import React, { useContext, useState } from "react";

const movieList = {
  orderBy: "popular",
  updateOrderBy: () => {},
};

export const AppContext = React.createContext({
  orderBy: movieList.orderBy,
  updateOrderBy: movieList.updateOrderBy,
});
