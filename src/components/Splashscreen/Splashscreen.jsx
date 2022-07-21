import s from './Splashscreen.module.css'

export default function Splashscreen({ name }) {
    return (
        <p className={s.preloaderName}>{name}</p>
    )
}