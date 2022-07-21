import * as reposActions from './repos-actions';
import axios from 'axios'


export const getRepos = (searchQuery, currentPage, perPage) => {
    return async (dispatch) => {
        try {
            dispatch(reposActions.setIsFetching(true))
            const response = await axios.get(`https://api.github.com/search/repositories?q=${searchQuery}&sort=stars&per_page=${perPage}&page=${currentPage}`)
            dispatch(reposActions.setRepos(response.data))
            dispatch(reposActions.setIsFetching(false))
        } catch (error) {
            dispatch(reposActions.setFetchError(true))
            dispatch(reposActions.setIsFetching(false))
            setTimeout(()=> {
                dispatch(reposActions.setFetchError(false))
            }, 2000)
        }
    }
}

export const getCurrentRepo = async (username, repoName, setRepo) => {
   const response = await axios.get(`https://api.github.com/repos/${username}/${repoName}`)
    setRepo(response.data)
}