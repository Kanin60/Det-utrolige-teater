//modtager 2 datoer i en string. Deler den i start og slut dato.
//derefter "deles" datoerne op i start-dag og -måned, og slut-dag og -måned samt år.
//månederne laves til en string på dansk med det fulde månedsnavn.
//så sættes variablerne sammen til en dansk dato i convertedDate, som retuneres
//koden er modifiseret fra https://github.com/Kanin60/Mediesuset/blob/main/src/helpers/convertDate.js
export function dateConverter(date) {
    let startDate = new Date(date.split(" - ")[0]);
    let endDate = new Date(date.split(" - ")[1]);

    let startDay = startDate.getDate();
    let startMonth = startDate.toLocaleString('da-DK', { month: 'long' });
    let endDay = endDate.getDate();
    let endMonth = endDate.toLocaleString('da-DK', { month: 'long' });
    let year = endDate.getFullYear();

    return `${startDay}. ${startMonth} - ${endDay}. ${endMonth} ${year}`


}