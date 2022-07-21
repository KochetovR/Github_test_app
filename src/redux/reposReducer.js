import {createReducer} from '@reduxjs/toolkit'
import {setRepos, setIsFetching, setCurrentPage, setFetchError} from './repos-actions'

const defaultState = {
    items: [],
    isFetching: false,
    currentPage:1,
    perPage:10,
    totalCount: 0,
    isFetchError: false
}

export const reposReducer = createReducer(defaultState, {
    [setRepos]: (state, action) => {
        return {
                ...state,
                items: action.payload.items,
                totalCount: action.payload.total_count,
                isFetching: false
            }
    },
    [setIsFetching]: (state, action) => {
        return {
            ...state,
            isFetching: action.payload
        }
    },
    [setCurrentPage]: (state, action) => {
        return {
                ...state,
                currentPage: action.payload
            }
    },
    [setFetchError]: (state, action) => {
        return {
                ...state,
                isFetchError: action.payload
            }
    }
})