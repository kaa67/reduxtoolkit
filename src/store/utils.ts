import type { CharactersStore } from "./types"

export const initialState: CharactersStore = {
    characters: null,
}

export const charactersFetchCallback = async () => {
    debugger

    const response = await fetch(
        'http://localhost:8080/api/data',
    )

    const data = await response.json()

    return data
}
