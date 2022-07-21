import {createAction} from '@reduxjs/toolkit'

export const setRepos = createAction('SET_REPOS')
export const setIsFetching = createAction ('SET_IS_FETCHING');
export const setCurrentPage = createAction('SET_CURRENT_PAGE');
export const setFetchError = createAction('SET_FETCH_ERROR');