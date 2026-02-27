import { Link } from "react-router"

import useData from "./useData"

const Characters = () => {
    const { page, characters } = useData()

    return (
        <>
            <div>
                <Link to="/">
                    На главную
                </Link>
            </div>

            <h1>Мерзкие типы, страница {page || '1'}</h1>

            <table>
                <tbody>
                    {characters.map(
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
