import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchData = createAsyncThunk('data/fetchData', async () => {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    return data.products;
});

const productSlice = createSlice({
    name: "productSlice",
    initialState: {
        items: [],
        loading: false,
        error: null
    },
    reducers: {
        //you can add synchronous reducers
    },
    extraReducers: (builder) => {
        builder.addCase(fetchData.pending, (state) => {
            state.loading = true;
            state.error = null;
        }).addCase(fetchData.fulfilled, (state, action) => {
            state.loading = false;
            state.items = action.payload;
        }).addCase(fetchData.rejected, (state) => {
            state.loading = false;
            state.error = action.error.message;
        })
    }
})

export default productSlice.reducer;