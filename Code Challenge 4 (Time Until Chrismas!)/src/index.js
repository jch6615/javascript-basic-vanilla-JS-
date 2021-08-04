const clockTitle = document.querySelector(".js-clock");

function untilChristmas () {
    //today
    const today = new Date();
    //Christmas
    const christmas = new Date('December 25, 2021 00:00:00');
    //time gap
    const gap = christmas.getTime() - today.getTime();
    const days = Math.ceil(gap / (1000 * 60 * 60 * 24));
    const hours = String(Math.ceil(gap / (1000 * 60 * 60)) % 24).padStart(2, "0");
    const minutes = String(Math.ceil(gap / (1000 * 60)) % 60).padStart(2, "0");
    const seconds = String(Math.ceil(gap / 1000) % 60).padStart(2, "0");

    // const days = Math.ceil(gap / (1000 * 60 * 60 * 24));
    // const hours = Math.ceil((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    // const minutes = Math.ceil((gap % (1000 * 60 * 60)) / (1000 * 60));
    // const seconds = Math.ceil((gap % (1000 * 60)) / 1000);

    clockTitle.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

untilChristmas()
setInterval(untilChristmas, 1000);