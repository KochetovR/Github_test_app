export const getRepos = state => state.repos.items
export const isFetching = state => state.repos.isFetching
export const totalCount = state => state.repos.totalCount
export const perPage = state => state.repos.perPage
export const currentPage = state => state.repos.currentPage
export const isFetchError = state => state.repos.isFetchError