import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartState {
  toggle: string;
}
const initialState: CartState = { toggle: "" };
export const toggleSlice = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    setToggle: (state, action: PayloadAction<string>) => {
      state.toggle = action.payload;
    },
  },
});

export const { setToggle } = toggleSlice.actions;
export default toggleSlice.reducer;
