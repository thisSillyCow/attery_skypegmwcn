let clientHeight = '';
const rollTypeElement = document.getElementsByClassName("rollType");

export function rollState(clientHeightDate) {
    const IntervalTime = setInterval(() => {
        clientHeight = clientHeightDate;
        const readyState = document.readyState;
        if (readyState == "complete") {
            document.documentElement.scrollTop = 0;
            clearInterval(IntervalTime);
            initCartoon();
            window.onscroll = function() {
                initCartoon();
            };
        }
    });
}

function initCartoon() {
    for (let i = 0; i < rollTypeElement.length; i++) {
        const getRoll = rollTypeElement[i].getAttribute("rollType");
        const getClass = rollTypeElement[i].getAttribute("class");
        const bodyClientHeight = clientHeight + document.documentElement.scrollTop;
        if (rollTypeElement[i].offsetTop + 50 < bodyClientHeight) {
            if (getRoll == "rollRight" && getClass.indexOf("animationHotRight") < 0) {
                rollTypeElement[i].setAttribute("class", getClass + " animationHotRight");
            } else if (getRoll == "rollLeft" && getClass.indexOf("animationHotLeft") < 0) {
                rollTypeElement[i].setAttribute("class", getClass + " animationHotLeft");
            } else if (getRoll == "rollTop" && getClass.indexOf("animationHotTop") < 0) {
                rollTypeElement[i].setAttribute("class", getClass + " animationHotTop");
            }
        }
    }
}
export default {
    rollState,
}