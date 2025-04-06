// store/weatherSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Akcja asynchroniczna do pobierania danych pogodowych
export const fetchWeatherData = createAsyncThunk(
  'weather/fetchWeatherData',
  async (city, { rejectWithValue }) => {
    try {
      const response = await fetch(`http://localhost:3000/api/geo?city=${encodeURIComponent(city)}`);
      // if (!response.ok) {
      //   throw new Error('Nie udało się pobrać danych pogodowych');
      // }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  city: 'Gliwice',
  weatherData: null,
  loading: false,
  error: null,
  selectedDay: 0,
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setCity: (state, action) => {
      state.city = action.payload;
    },
    clearWeatherData: (state) => {
      state.weatherData = null;
      state.error = null;
    },
    setSelectedDay: (state, action) => {
      state.selectedDay = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeatherData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWeatherData.fulfilled, (state, action) => {
        state.loading = false;
        state.weatherData = action.payload;
        state.city = action.payload.city && action.payload.city.name
        ? action.payload.city.name
        : action.payload.city || 'Gliwice'; // Ustaw domyślną nazwę miasta na 'Gliwice'
      })
      .addCase(fetchWeatherData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export const { setCity, clearWeatherData, setSelectedDay  } = weatherSlice.actions;
export default weatherSlice.reducer;