import {createSelector} from 'reselect';

const getWelcomeReducer = state => state.welcomeReducer;

const mergeSelectedReducers = welcomeReducer => welcomeReducer;

export const SelectState = createSelector(
    [getWelcomeReducer],
    mergeSelectedReducers
);
