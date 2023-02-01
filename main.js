const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
// function to be executed every second
const setDate = () => {
    // to set the actual date and time
    const now = new Date();
    // seconds
    const seconds = now.getSeconds();
    // turn the seconds into an specific degree, added 90 to match the 90deg style origin
    const secondsDeg = ((seconds / 60) * 360 + 90);
    // make the hands move according the logic using the constant secondsDeg using template strings
    secondHand.style.transform = `rotate(${secondsDeg}deg)`;
    // mins
    const mins = now.getMinutes();
    // (mins / 60) * 360) divides the actual minutes by 60 and multiplies it by 360 to obtain the full rotation degs of an hour, same applies to secs (min) and hours (day)
    const minsDeg = (((mins / 60) * 360) + 90);
    minsHand.style.transform = `rotate(${minsDeg}deg)`;
    // hours
    const hours = now.getHours();
    // + ((mins/60)*30) divides the actual minute by 60 and multiplies it by 30 to get an additional rotation, making the hour hand move instead of being static, same logic could be applied to mins if needed
    const hoursDeg = (((hours / 12) * 360) + ((mins/60)*30) + 90);
    hourHand.style.transform = `rotate(${hoursDeg}deg)`;
};
// make it run every second with interval 1 s = 1000 ms
setInterval(setDate, 1000);
setDate();