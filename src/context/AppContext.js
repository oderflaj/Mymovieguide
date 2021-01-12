import React, { useContext, useState } from "react";

export const header = {
  titleScreen: "",
  updateTitleScreen: () => {},
};

export const HeaderContext = React.createContext({
  titleScreen: header.titleScreen,
  updateTitleScreen: header.updateTitleScreen,
});
