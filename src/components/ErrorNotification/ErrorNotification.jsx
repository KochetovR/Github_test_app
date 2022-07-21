import s from './ErrorNotification.module.css'

export default function ErrorNotification() {
    return (
        <div className={s.errorNotification}>
            <p>Ничего на найденно! Измените запрос и повторьте еще разок</p>
        </div>
    )
}