export const wowInit = () => {
    if (typeof window !== "undefined") {
        const { WOW } = require('wowjs');
        if (WOW) {
            let wow = new WOW(
                {
                    boxClass: 'wow',      // animated element css class (default is wow)
                    animateClass: 'animated', // animation css class (default is animated)
                    offset: 0,          // distance to the element when triggering the animation (default is 0)
                    mobile: true,       // trigger animations on mobile devices (default is true)
                    live: false,       // act on asynchronously loaded content (default is true)
                    scrollContainer: null // optional scroll container selector, otherwise use window
                }
            );
            wow.init();
        }
    }
}