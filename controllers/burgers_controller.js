var express = require('express');
var router = express.Router();

var Burger = require('../models')['Burgers'];
Burger.sync();

var Menu = require('../models')['Menus'];
Menu.sync();

//index page
router.get('/', function(req, res){
  //create an object that holds information from both the burger and menu table
  var info = {
    brgr: [],
    itm: []
  };

  Burger.findAll({
    attributes: ['id', 'burger_name', 'devoured']
  }).then(function(data){
    info.brgr.push(data);

    //grab data from menu table
    Menu.findAll({
      attributes: ['id', 'item', 'entree']
    }).then(function(result){
      info.itm.push(result);

       res.render('index', info);
    });

  });
});

//grabs menu to display on menu page
router.get('/menu', function(req, res){
  Menu.findAll({})
    .then(function(data){
      res.render('restaurantMenu', { itm: data });
  });
});

//creates a new burger to be devoured
router.post('/create', function(req, res){
  Burger.create({
    burger_name: [req.body.burgerInput],
    devoured: 0
  });

  res.redirect('/');
});

//updates the burger to devoured
router.put('/update/:id', function(req, res){
  Burger.update({
    devoured: [req.body.devoured],
  },{
    where: {
      id: [req.params.id]
    }
  });

  res.redirect('/');
});

//removes a burger
router.delete('/delete/:id', function(req, res){
  Burger.destroy({
    where:{
      id: [req.params.id]
    }
  });

  res.redirect('/');
});

module.exports = router;