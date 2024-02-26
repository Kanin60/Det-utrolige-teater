import style from './Hero.module.scss'

export const Hero = ({ stage, date, title, genre, imgSrc }) => {

    return (
        <section className={style.hero}>
            <figure>
                <figcaption>
                    <p>{stage}</p>
                    <b>{date}</b>
                    <h2>{title}</h2>
                    <p>{genre}</p>
                </figcaption>
                <img src={imgSrc} alt={title} />
            </figure>
        </section>
    )
}