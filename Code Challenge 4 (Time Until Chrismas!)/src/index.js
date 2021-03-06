const clockTitle = document.querySelector(".js-clock");
const clockTitle2 = document.querySelector(".js-clock2");

function untilChristmas () {
    //today
    const today = new Date();
    //Christmas
    const christmas = new Date('December 25, 2021 00:00:00');
    //time gap
    //β Bad Code π©
    const gap = christmas.getTime() - today.getTime();
    const days = Math.ceil(gap / (1000 * 60 * 60 * 24));
    const hours = String(Math.ceil(gap / (1000 * 60 * 60)) % 24).padStart(2, "0");
    const minutes = String(Math.ceil(gap / (1000 * 60)) % 60).padStart(2, "0");
    const seconds = String(Math.ceil(gap / 1000) % 60).padStart(2, "0");

    //β Bad Code π©
    // const days = Math.ceil(gap / (1000 * 60 * 60 * 24));
    // const hours = Math.ceil((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    // const minutes = Math.ceil((gap % (1000 * 60 * 60)) / (1000 * 60));
    // const seconds = Math.ceil((gap % (1000 * 60)) / 1000);

    clockTitle.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

function calculateBetweenDate() {
    //β Good Code β¨
    const currentDate = new Date();
    const christmasDate = new Date(2021, 12, 25);

    const diffTime = christmasDate.getTime() - currentDate.getTime();
    const diffDate = new Date(0, 0, 0, 0, 0, 0, diffTime);
    //κ³μ°ν μκ°μ μ°¨μ΄ (ms)λ₯Ό κ³μ°νμ¬ λ μ§λ‘μ μ·¨κΈ.
    const diffDay = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const diffHour = String(diffDate.getHours()).padStart(2, "0");
    const diffMinutes = String(diffDate.getMinutes()).padStart(2, "0");
    const diffSeconds = String(diffDate.getSeconds()).padStart(2, "0");
    clockTitle2.innerText = `${diffDay}d ${diffHour}h ${diffMinutes}m ${diffSeconds}s`;
}
untilChristmas()
setInterval(untilChristmas, 1000);

calculateBetweenDate();
setInterval(calculateBetweenDate, 1000);
