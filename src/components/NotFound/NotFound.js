import { Link } from "react-router-dom";
import './NotFound.css';
import notFoundImg from '../../images/404.svg';

function NotFound() {
    return (
        <>
            <section className="not-found">
                <img className="not-found-image" src={notFoundImg} alt='Ошибка 404'/>
                <h2 className="not-found-title">
                    Похоже эта страница не работает.
                    Зато мы работаем всегда.
                </h2>
                <Link to='/' className="not-found-link">
                    Вернуться на главную
                </Link>
            </section>
        </>
    );
}

export default NotFound;