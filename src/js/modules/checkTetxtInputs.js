

const checkTextInputs = (selector) => {
    const txtInputs = document.querySelectorAll(selector);

    txtInputs.forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key.match(/[^а-яА-ЯґҐєЄіІїЇ\s]/ig)) {
                e.preventDefault();
            }
        });
    })
};
export default checkTextInputs;