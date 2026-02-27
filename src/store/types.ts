export type Character = {
    name: string;
};

export type CharactersStore = {
    characters: Character[] | null;
};

export type CharactersResponse = {
    result: Character[];
};