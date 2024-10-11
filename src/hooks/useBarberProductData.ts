import axios, { AxiosPromise } from "axios"
import { BarberProductData } from "../interface/BaberProductData";
import { useQuery } from "@tanstack/react-query";

const API_URL = 'http://localhost:8080';

const fetchData = async (): AxiosPromise<BarberProductData[]> => {
    const response = axios.get(API_URL + '/barberproduct')
    return response; 
}

export function useBarberProductData() {
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['baberproduct-data'],
        retry: 2
    })

    return {
        ...query,
        data: query.data?.data
    }
}