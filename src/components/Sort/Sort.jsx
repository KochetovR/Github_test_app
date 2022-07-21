import { useState } from 'react';
import s from './Sort.module.css';

export default function Sort({ Icon, handleClickOnSort, type }) {
    const [sortRepos, setSortRepos] = useState(null)
    const isClickOnIcon = () => {
        if (!sortRepos) {
            setSortRepos(true)
            handleClickOnSort(type, true)
            return
        }
        if (sortRepos) {
            setSortRepos(false)
            handleClickOnSort(type, false)
            return
        }
    }
    return (
        <button type='button' className={s.iconButton} onClick={isClickOnIcon}>
            <Icon />
        </button>
    )
}