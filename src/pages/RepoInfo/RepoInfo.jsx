import React, {useState, useEffect} from 'react';
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { getCurrentRepo} from "../../redux/repos-operations";

import s from './RepoInfo.module.css'

export default function RepoInfo() {
    const {username, reponame} = useParams()
    const [repo, setRepo] = useState({ owner: {} })
    const location = useLocation();
    const historyParam = location.state ? location.state.prevSearchValue : '';
    useEffect(()=>{
        getCurrentRepo(username, reponame, setRepo)
    }, [username, reponame])

    const navigate = useNavigate ();

    const onClickGoBack = () => {
        navigate('/', {state: {prevSearch: historyParam}})
    };

    const newData = repo.created_at?.slice(0, 10)

    return (
        <div className={s.repoWrapper}>
                <img className={s.avatar} src={repo.owner.avatar_url} alt={repo.owner.login} />
                <p>Логин: {repo.owner.login}</p>
                <p>Имя репозитория: {repo.name}</p>
                <p>Дата создания: {newData}</p>
                <p>Описание: {repo.description}</p>
                <a href={repo.git_url}>Ссылка на Git:</a>
            <button onClick={onClickGoBack} className={s.backButton}>Назад</button>
        </div>
    )
}