function updateTime() {
    /*Retrieves current time and assigns to 'time' id*/
    const date = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const time = date.toLocaleTimeString();
    const day = date.toLocaleDateString(undefined, options);
    document.getElementById('time').innerHTML =
        `Today is: ${day}, Current Time: ${time}`;
}
