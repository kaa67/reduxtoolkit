import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../store"
import { charactersFetch } from "../../store/charactersSlice";

const useData = () => {
    const dispatch = useAppDispatch();

    const characters = useAppSelector(
        (store) => store?.characters?.characters || [],
    )


    useEffect(
        () => {
            dispatch(charactersFetch())
        },
        [dispatch],
    )

    const data = {
        characters,
    }

    return data
}

export default useData
