const { createSlice } = require('@reduxjs/toolkit');

const currencySlice = createSlice({
    name: "currency",
    initialState: {
        currencySymbol: "৳",
        currencyName: "Taka",
        currencyRate: 1
    },
    reducers: {
        setCurrency(state, action) {
            const currencyName = action.payload;
            return currencyName;

            // if (currencyName === "Taka") {
            //     return state = {
            //         currencySymbol: "$",
            //         currencyRate: 1,
            //         currencyName 
            //     };
            // }
            // if (currencyName === "EUR") {
            //     return state = {
            //         currencySymbol: "€",
            //         currencyRate: 1,
            //         currencyName
            //     };
            // }
            // if (currencyName === "GBP") {
            //     return state = {
            //         currencySymbol: "£",
            //         currencyRate: 1,
            //         currencyName
            //     };
            // }
        }
    },
});

export const { setCurrency } = currencySlice.actions;
export default currencySlice.reducer;
