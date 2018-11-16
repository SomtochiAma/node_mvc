const express = require("express");
const router = express.Router();

const aboutApps = [
    {title: "Name" , desc:'Decor 8'},
    {title: "Locations", desc: 'Abuja, Lagos, PortHarcout'},
    {title: "Services", desc: 'Interior Decor, Wall Painting, Furniture Sales'}
]

router.use((req, res, next) => {
    res.locals.appInfos = aboutApps;
    next();
})

router.get('/', (req, res, next) => {
    res.render('about', {page: 'About', menuId:'about'});
})



module.exports = router;