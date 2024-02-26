import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { dateConverter } from "../../helpers/dateConverter"
import style from "./DetailsPage.module.scss";
import { Button } from "../../components/Button/Button";


export function DetailsPage() {

    const [details, setDetails] = useState()
    const { id } = useParams()

    //henter detalijer fra en plakat via et id, som sendes med fra firstpage.
    useEffect(() => {
        const url = `http://localhost:4000/events/${id}`
        fetch(url).then(res => res.json()).then(data => setDetails(data))
    }, [])
    //http://localhost:4000/reviews/1?event_id=1
    // console.log('details: ', details);
    return (
        <section className={style.detailspage}>
            {details &&
                <>
                    <img src={`http://localhost:4000/Assets/Images/events/large/${details?.image}`} alt={details?.title} />
                    <div className={style.detailswrapper}>
                        <b>{details?.stage?.name}</b>
                        <div className={style.datepricewrapper}>
                            <p>{dateConverter(details?.startdate + ' - ' + details?.stopdate)}</p>
                            <p>BILLETPRIS: {details?.price},00 DKK</p>
                        </div>
                        <div className={style.titlewrapper}>
                            <h2>{details?.title}</h2>
                            <Button text={'Køb billet'} bgColor={'#AD7A51'} />
                        </div>
                        <p>{details?.genre?.name}</p>
                        <p>{details?.description}</p>
                        <p>MEDVIRKENDE</p>
                        <div className={style.smallactorcard}>
                            <div className={style.actorcardgrid}>
                                {details.actors &&
                                    details?.actors?.map((item, index) => {
                                        return (
                                            <figure key={index} >
                                                <img src={`http://localhost:4000/Assets/Images/actors/${item?.image}`} alt={item?.name} />
                                                <p><Link to={`/skuespiller/${item.id}`}>{item?.name}</Link></p>
                                            </figure>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className={style.review}>
                            <p>Anmeldelser</p>
                        </div>
                    </div>
                </>
            }
        </section>
    )
}