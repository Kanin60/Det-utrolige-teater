import style from './EventCard.module.scss'
import { Button } from "../Button/Button";

export const EventCard = ({ stage, date, title, genre, imgSrc, id }) => {
    return (
        <section className={style.eventcard}>
            <figure>
                <img src={imgSrc} alt={title} />
                <figcaption>
                    <p>{stage}</p>
                    <b>{date}</b>
                    <h2>{title}</h2>
                    <p>{genre}</p>
                    <div>
                        <Button text={'Læs mere'} bgColor={'#30454C'} path={`/detaljer/${id}`} />
                        <Button text={'Køb Billet'} bgColor={'#D39D5B'} path={'/forestillingerogevents'} />
                    </div>
                </figcaption>
            </figure>
        </section>
    )
}