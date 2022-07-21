import { useState, useEffect, useRef } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Splashscreen from '../Splashscreen';

import HomePage from "../../pages/HomePage";
import RepoInfo from '../../pages/RepoInfo';

import s from './App.module.css'


const App = () => {
    const [preloaderName, setPreloaderName] = useState(true);
    const firstRender = useRef(true);
    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false
            return
        }
        setTimeout(() => {
            setPreloaderName(false)
        }, 2000)
    }, [])

    return (
        <div className={s.container}>
            {preloaderName
                ?
                    <Splashscreen name='Roman Kochetov' />
                :
                    <Routes>
                        <Route index element={<HomePage />} />
                        <Route path='/repoInfo/:username/:reponame' element={<RepoInfo />} />
                        <Route path='*' element={<Navigate to='/' replace />} />
                    </Routes>
            }
        </div>
    );
};

export default App;