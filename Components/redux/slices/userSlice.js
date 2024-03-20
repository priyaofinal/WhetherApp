import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    weatherData: null,
  },
  reducers: {
    setWeather: (state, action) => {
      state.weatherData = action.payload;
    },
  },
});

export const {setWeather} = userSlice.actions;

export default userSlice.reducer;
