import { Link } from "react-router"

const MainPage = () => (
    <>
        <h1>Здесь про Рика и Морти</h1>

        <div>
            <Link to="/characters">
                Мерзкие типы, список
            </Link>
        </div>
    </>
)

export default MainPage
