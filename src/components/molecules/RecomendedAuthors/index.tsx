import style from './style.module.scss';

export default function RecomendedAuthors() {
    return (
        <div className={style.trendingContainer}>
            <p>Autores Recomendados</p>

            <div className={style.trendingContent}>
                <div className={style.trendingItem}>
                    <div className={style.authorImage}></div>
                    <span>K. C. Lemmor</span>

                    <span className={style.postQuantity}>Seguir</span>
                </div>

                <hr />

                <div className={style.trendingItem}>
                    <span>K. C. Lemmor</span>

                    <span className={style.postQuantity}>Seguir</span>
                </div>

                <hr />

                <div className={style.trendingItem}>
                    <span>K. C. Lemmor</span>

                    <span className={style.postQuantity}>Seguir</span>
                </div>

                <hr />

                <div className={style.trendingItem}>
                    <span>K. C. Lemmor</span>

                    <span className={style.postQuantity}>Seguir</span>
                </div>

                <hr />

                <div className={style.trendingItem}>
                    <span>K. C. Lemmor</span>

                    <span className={style.postQuantity}>Seguir</span>
                </div>

                <hr />

                <div className={style.trendingItem}>
                    <span>K. C. Lemmor</span>

                    <span className={style.postQuantity}>Seguir</span>
                </div>
            </div>
        </div>
    );
}