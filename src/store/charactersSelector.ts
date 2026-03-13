import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '.';

const stateCharacters = (state: RootState) => state.characters;

export const memoizedCharacters = createSelector(
  [stateCharacters],
  chars => chars.characters,
);
