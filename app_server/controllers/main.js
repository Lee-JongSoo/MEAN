/* Get homepage */
const index = (req, res) => {
    res.render('index', {title: 'Express by 2017250035 Lee-JOngSu'})
};

module.exports = {
    index
}