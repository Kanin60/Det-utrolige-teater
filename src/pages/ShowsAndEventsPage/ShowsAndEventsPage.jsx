import { useEffect, useState } from "react";
import { ListEventCard } from "../../components/EventCard/ListEventCard";
import { Hero } from "../../components/Hero/Hero";
import { dateConverter } from "../../helpers/dateConverter";


export function ShowsAndEventsPage() {

    const [eventsData, setEventsData] = useState();

    function handelFetchWithId() {
        const ids = [1, 2, 3, 4, 5, 6]; //Der er nok en mere dynamisk måde at gøre det her på hvor man fetcher listen og så måler på længden. Men det blev lige lavet på den her "faste" måde...
        const fetchPromises = ids.map(async id => {
            return await fetch(`http://localhost:4000/events/${id}`)
                .then(res => res.json());
        });

        Promise.all(fetchPromises)
            .then(data => setEventsData(data))
            .catch(err => console.error(err));
    }

    useEffect(() => {
        handelFetchWithId();
    }, []);

    // console.log('Events: ', eventsData);
    /* I listen skal forestillinger vises med et lille billede, titel, spilletider, scene og
    mulighed for at læse mere eller købe billet. */

    let dateStringHero = eventsData?.startdate + ' - ' + eventsData?.stopdate;
    let convertedDateHero = dateConverter(dateStringHero);

    return (
        <>
            {eventsData &&
                <Hero stage={eventsData[1]?.stage?.name} date={convertedDateHero} title={eventsData[1]?.title} genre={eventsData[1]?.genre?.name} imgSrc={`http://localhost:4000/Assets/Images/events/medium/bugsy-malone.jpg`} />
            }
            {eventsData &&
                eventsData?.map((event) => {
                    return (
                        <ListEventCard key={event.id} imgSrc={`http://localhost:4000/Assets/Images/events/small/${event?.image}`} title={event.title} stage={event.stage.name} date={dateConverter(event?.startdate + ' - ' + event?.stopdate)} id={event.id} />
                    )
                })
            }

        </>
    )
}