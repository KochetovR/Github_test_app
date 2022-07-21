import s from './Pagination.module.css';

export default function Pagination({ pages, currentPage, changeCurrentPage }) {
    return (
    <div className={s.pages}>
            {pages.map(page =>
            <span
            key={page}
            className={`${currentPage === page ? s.currentPage : ''} ${s.page}`}
            onClick={() => changeCurrentPage(page)}>{page}</span>)}
    </div>
)
}