import { Button } from "../Button/Button";
import style from "./ListEventCard.module.scss";

export const ListEventCard = ({ imgSrc, title, stage, date, id }) => {

    return (
        <figure className={style.listeventcard}>
            <img src={imgSrc} alt={title} />
            <h2>{title}</h2>
            <div>
                <p>{stage}</p>
                <b>{date}</b>
            </div>
            <Button text={'Læs mere'} bgColor={'#30454C'} path={`/detaljer/${id}`} />
            <Button text={'Køb Billet'} bgColor={'#D39D5B'} path={'/forestillingerogevents'} />
        </figure>
    )
}