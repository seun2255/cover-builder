/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  binderName: "",
  cards: [{}, {}, {}],
  showGallery: false,
  cardIndex: 0,
  middleCardOrientation: "landscape",
  showPreview: false,
  printableDivRef: "",
};

interface setBinderName {
  payload: {
    text: string;
  };
}

interface SetCard {
  payload: {
    image: any;
    index: number;
  };
}

interface Display {
  payload: {
    display: boolean;
  };
}

interface DisplayGallery {
  payload: {
    display: boolean;
    index: number;
  };
}

interface Print {
  payload: {
    ref: any;
  };
}

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    displayGallery: (state: any, action: DisplayGallery) => {
      state.cardIndex = action.payload.index;
      state.showPreview = false;
      state.showGallery = action.payload.display;
    },
    displayPreview: (state: any, action: Display) => {
      state.showGallery = false;
      state.showPreview = action.payload.display;
    },
    setBinderName: (state: any, action: setBinderName) => {
      state.binderName = action.payload.text;
    },
    setCard: (state: any, action: SetCard) => {
      state.cards[action.payload.index] = action.payload.image;
    },
    printDiv: (state: any, action: Print) => {
      state.printableDivRef = action.payload.ref;
    },
    switchOrientation: (state: any) => {
      state.middleCardOrientation =
        state.middleCardOrientation === "portrait" ? "landscape" : "portrait";
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  displayGallery,
  displayPreview,
  setBinderName,
  setCard,
  switchOrientation,
} = appSlice.actions;

export default appSlice.reducer;
