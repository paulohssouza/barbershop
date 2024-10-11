import axios, { AxiosPromise } from "axios"
import { BarberProductData } from "../interface/BaberProductData";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const API_URL = 'http://localhost:8080';

const postData = async (data: BarberProductData): AxiosPromise<unknown> => {
    const response = axios.post(API_URL + '/barberproduct', data)
    return response; 
}

export function useBarberProductDataMutate() {
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: postData,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries(['baberproduct-data'])
        }
    })

    return mutate;
}