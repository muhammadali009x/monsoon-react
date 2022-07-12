
import "../css/weather.css"
export default function DateTime() {
    const weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tue";
    weekday[3] = "Wed";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "June",
        "July",
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec",
    ];


    const currDate = new Date();
    const currmonth = months[currDate.getMonth() + 1]
    let day = weekday[currDate.getDay()];
    const date = `${currDate.getDate()} ${currmonth}`

    return (
        <>
            <p className="pDay">{day}</p>
            <p className="pTodayData">{date}</p>
        </>
    )
}