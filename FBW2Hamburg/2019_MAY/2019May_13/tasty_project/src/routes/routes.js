const express = require('express');
const router = express.Router();

// Home Page

router.get('/', (req,res)=>{
res.render('index',{title: 'Express'});
});

// Menu Page

router.get('/menu', (req,res)=>{
    res.render('menu',{title: 'Express'});
    });

// Specialties Page

router.get('/specialties', (req,res)=>{
    res.render('specialties',{title: 'Express'});
    });

// Reservation Page

router.get('/reservation', (req,res)=>{
    res.render('reservation',{title: 'Express'});
    });

// Blog Page

router.get('/blog', (req,res)=>{
    res.render('blog',{title: 'Express'});
    });

// About Page

router.get('/about', (req,res)=>{
    res.render('about',{title: 'Express'});
    });

// Contact Page

router.get('/contact', (req,res)=>{
    res.render('contact',{title: 'Express'});
    });








module.exports = router;