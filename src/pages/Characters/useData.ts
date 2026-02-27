import { useEffect } from "react";

import { useParams } from "react-router"

import { useAppDispatch, useAppSelector } from "../../store"
import { charactersFetch } from "../../store/charactersSlice";

const useData = () => {
    const { page } = useParams()
    const dispatch = useAppDispatch();

    const characters = useAppSelector(
        (store) => store?.characters?.characters || [],
    )


    useEffect(
        () => {
            dispatch(charactersFetch())
        },
        [page, dispatch],
    )

    const data = {
        page: page || '1',
        characters,
    }

    return data
}

export default useData
