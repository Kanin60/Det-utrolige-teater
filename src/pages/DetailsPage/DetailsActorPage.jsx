import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import style from './DetailsPage.module.scss'
import { Button } from "../../components/Button/Button"

export function DetailsActorPage() {
    const [details, setDetails] = useState()
    const { id } = useParams()

    //henter detalijer fra en plakat via et id, som sendes med fra firstpage.
    useEffect(() => {
        const url = `http://localhost:4000/actors/${id}`
        fetch(url).then(res => res.json()).then(data => setDetails(data))
    }, [])
    // console.log('details: ', details);

    return (
        <>
            {
                details &&
                <section className={style.detailsactorpage}>
                    <figure>
                        <h2>Skuespillere</h2>
                        <div>
                            <img src={`http://localhost:4000/Assets/Images/actors/${details?.image}`} alt={details?.name} />
                            <figcaption>
                                <h3>{details?.name}</h3>
                                <p>{details?.description}</p>
                            </figcaption>
                        </div>
                    </figure>
                    <Button text={'Alle Skuespillere'} bgColor={'#AD7A51'} path={'/skuespillere'} />
                </section>
            }
        </>
    )
}