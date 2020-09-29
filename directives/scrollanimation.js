const animetedScrollObserver = new IntersectionObserver(
    (enteries, animetedScrollObserver) => {
        enteries.forEach((entry) => {
            entry.target.classList.add('enter');
            animetedScrollObserver.unobserve(entery.target)

        })
    }
)

export default {
    bind(el) {
        el.classList.add('before-enter');
        animetedScrollObserver.observe(el)

    }
}