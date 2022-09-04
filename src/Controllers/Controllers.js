

const home = (req, res)=>{
    let nome = 'Anderson'
    res.render('home', {nome})
}

module.exports = {home}