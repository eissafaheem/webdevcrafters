

function handleOnDOMLoad() {
    const changingText = document.querySelector(".changing-message");
    let autoScrollTextAnimationStarted = false;

    function startTextChange() {
        console.log("113")
        let index = 0;
        const totalIndex = changingText.children.length;
        setInterval(() => {
            index++;
            const firstChildHeight = changingText.firstElementChild.clientHeight;
            if (index === totalIndex + 1) {
                index = 0
                changingText.scrollTo({ top: 0, behavior: "smooth" });
            }
            else {
                changingText.scrollBy({ top: firstChildHeight, behavior: "smooth" });
            }
        }, 1000);
    }

    function handleAutoScrollTextInView() {
        const targetDiv = changingText;
        const bounding = targetDiv.getBoundingClientRect();
        if (
            bounding.top >= 0 &&
            bounding.left >= 0 &&
            bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
        ) {
            if (!autoScrollTextAnimationStarted) startTextChange();
            autoScrollTextAnimationStarted = true;
            console.log(autoScrollTextAnimationStarted)
        }
        else {
        }
    }

    function transformStarByScroll() {
        let scrollPosition = window.scrollY;
        if (scrollPosition - 200 > window.innerWidth) {
            return;
        }
        let parallaxImg = document.querySelector('.parallax-img');
        parallaxImg.style.transform = 'translate(' + (scrollPosition - 150) + 'px, ' + (scrollPosition - 500) + 'px)';
    }

    function isMobileDevice() {
        return /iPhone|iPad|iPod|Android|Windows Phone/.test(navigator.userAgent);
    }

    window.addEventListener('scroll', function () {
        transformStarByScroll();
        handleAutoScrollTextInView();
    });


    const parallax = document.querySelector('#home');
    parallax.addEventListener('mousemove', (e) => {
        const parallaxImage1 = document.querySelector('.fireflies1');
        const parallaxImage2 = document.querySelector('.fireflies2');
        // const brandName = document.querySelector('.brand-name');
        console.log("object")
        const xAxis1 = (window.innerWidth / 2 - e.pageX) / 25;
        const yAxis1 = (window.innerHeight / 2 - e.pageY) / 25;
        const xAxis2 = (window.innerWidth / 2 - e.pageX) / 15;
        const yAxis2 = (window.innerHeight / 2 - e.pageY) / 15;
        const xAxis3 = (window.innerWidth / 2 - e.pageX) / 30;
        const yAxis3 = (window.innerHeight / 2 - e.pageY) / 30;

        parallaxImage1.style.transform = `translate(${xAxis1}px, ${yAxis1}px)`;
        parallaxImage2.style.transform = `translate(${xAxis2}px, ${yAxis2}px)`;
        // brandName.style.transform = `translate(${xAxis3}px, ${yAxis3}px)`;
    });
}

document.addEventListener("DOMContentLoaded", () => {
    handleOnDOMLoad()
})


// https://animalmade.com/
// https://akinsparker.com/

/*

low fees
fast delivery
unlimited revisions

*/