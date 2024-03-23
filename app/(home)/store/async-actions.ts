//detoxify

import {createAsyncThunk} from "@reduxjs/toolkit";
import axiosInstance from "@/app/utils/api";

export const detoxifyThunk = createAsyncThunk(
    'detoxify/fetchMessages',
    async (messageText: string): Promise<{ detoxified_text: string }> => {
        const response = await axiosInstance.post("/detoxify", {text: messageText})
        return response.data
    }
)