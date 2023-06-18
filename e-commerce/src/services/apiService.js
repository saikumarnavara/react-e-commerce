import axios from "axios";
import { getProducts } from "./apiUrl";

export async function FetchApiData() {
    try {
        const response = await axios.get(getProducts.url)
        return response.data
    } catch (error) {
        console.log('Error Fetching data', error)
        return null;
    }
}