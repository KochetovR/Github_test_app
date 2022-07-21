import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import { IconContext } from "react-icons";

import s from './ListItem.module.css'

export default function ListItem({ repo, searchValue }) {
    const [isFavorite, setIsFavorite] = useState(false)
    const handleFavoriteClick = () => {
        setIsFavorite(!isFavorite)
    }
    return (
        <li className={s.repo}>
            <img src={repo.owner.avatar_url} alt="repo.owner.login" width={50} className={s.avatar} />
            <div>
                <p className={s.info}>Имя репозитория: <span>{repo.name}</span></p>
                <p className={s.info}>Количество звезд: <span>{repo.stargazers_count}</span></p>
                <p className={s.info}>Дата создания: <span>{repo.created_at?.slice(0, 10)}</span></p>
                <button type='button' className={s.viewMoreButton}>
                    <Link to={`/repoInfo/${repo.owner.login}/${repo.name}`} state={{ prevSearchValue: searchValue }}>
                        view more
                    </Link>
                </button>
                <button type='button' onClick={handleFavoriteClick} className={s.addToFavoriteButton}>добавить в избранное</button>
            </div>
            {isFavorite
                ?
                    <IconContext.Provider  value={{ className: s.reactIcons }}>
                        <MdFavorite size={25} color='orange' />
                    </IconContext.Provider>
                :
                    <IconContext.Provider  value={{ className: s.reactIcons }}>
                        <MdFavoriteBorder size={25} color='orange' />
                    </IconContext.Provider>
            }
        </li>
    )
}