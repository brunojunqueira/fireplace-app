import { FlatList } from '../../atoms/FlatList';

import style from './style.module.scss';

export function TrendingThemes() {
    return (
        <div className={style.trendingContainer}>
            <p>Temas em destaque</p>

            <div className={style.trendingContent}>
                <div className={style.trendingItem}>
                    <span>Ação</span>

                    <span className={style.postQuantity}>4M+ Posts</span>
                </div>

                <hr />

                <div className={style.trendingItem}>
                    <span>Aventura</span>

                    <span className={style.postQuantity}>2M+ Posts</span>
                </div>

                <hr />

                <div className={style.trendingItem}>
                    <span>Romance</span>

                    <span className={style.postQuantity}>1M+ Posts</span>
                </div>

                <hr />

                <div className={style.trendingItem}>
                    <span>Suspense</span>

                    <span className={style.postQuantity}>800K+ Posts</span>
                </div>

                <hr />

                <div className={style.trendingItem}>
                    <span>Drama</span>

                    <span className={style.postQuantity}>500K+ Posts</span>
                </div>

                <hr />

                <div className={style.trendingItem}>
                    <span>Futurista</span>

                    <span className={style.postQuantity}>400K+ Posts</span>
                </div>
            </div>
        </div>
    );
}