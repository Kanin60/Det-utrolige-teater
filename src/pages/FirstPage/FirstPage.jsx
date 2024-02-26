import { useEffect, useState } from "react";
import { Hero } from "../../components/Hero/Hero";
import { useFetch } from "../../hooks/useFetch";
import { dateConverter } from "../../helpers/dateConverter";
import { EventCard } from '../../components/EventCard/EventCard'
import style from './FirstPage.module.scss'
import { Button } from "../../components/Button/Button";

export function FirstPage() {

    const heroDataFetched = useFetch('http://localhost:4000/events/2')
    const heroData = heroDataFetched.data
    const [eventData, setEventData] = useState()


    function fetchDataWithRandomId() {
        const randomIds = Array.from({ length: 3 }, () => Math.floor(Math.random() * 6) + 1);
        const fetchPromises = randomIds.map(async id => {
            return await fetch(`http://localhost:4000/events/${id}`)
                .then(res => res.json())
        });

        Promise.all(fetchPromises)
            .then(data => setEventData(data))
            .catch(err => console.error(err));
    }

    useEffect(() => {
        fetchDataWithRandomId()
    }, [])

    let dateStringHero = heroData?.startdate + ' - ' + heroData?.stopdate;
    let convertedDateHero = dateConverter(dateStringHero);

    //http://localhost:{{PORT}}/Assets/Images/events/{{STØRRELSE}}/{{IMAGE NAME}}

    return (
        <>
            {heroData && eventData &&
                <>
                    <Hero stage={heroData?.stage?.name} date={convertedDateHero} title={heroData?.title} genre={heroData?.genre?.name} imgSrc={`http://localhost:4000/Assets/Images/events/medium/bugsy-malone.jpg`} />
                    <div className={style.eventcardwrapper}>
                        {
                            eventData &&
                            eventData?.map((event, index) => {
                                return (
                                    <EventCard key={index} stage={event.stage.name} date={dateConverter(event?.startdate + ' - ' + event?.stopdate)} title={event.title} id={event.id} genre={event.genre.name} imgSrc={`http://localhost:4000/Assets/Images/events/small/${event.image}`} />
                                )
                            })
                        }
                    </div>
                    <div className={style.buttonwrapper}>
                        <Button text={'SE ALLE FORESTILLINGER'} bgColor={'#AD7A51'} path={'/forestillingerogevents'} />
                    </div>
                </>
            }
        </>
    )
}
