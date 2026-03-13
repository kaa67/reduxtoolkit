import { Link, useParams } from "react-router"

// import useData from "./useData"
import { useAppDispatch } from "../../store";
import { useEffect } from "react";
import { charactersFetch } from "../../store/charactersSlice";
import { memoizedCharacters } from "../../store/charactersSelector";
import { useSelector } from "react-redux";

const Characters = () => {
    const { pageNumber } = useParams()
    const dispatch = useAppDispatch();
    const characters = useSelector(memoizedCharacters)

    useEffect(
        () => {
            dispatch(charactersFetch())
        },
        [dispatch],
    )

    return (
        <>
            <div>
                <Link to="/">
                    На главную
                </Link>
            </div>

            <h1>Мерзкие типы, страница {pageNumber || '1'}</h1>

            <table>
                <tbody>
                    {(characters ?? []).map(
                        (ch, key) => (
                            <tr key={key}>
                                <td>{ch.name}</td>
                            </tr>
                        )
                    )}
                </tbody>
            </table>
        </>
    )
}

export default Characters
