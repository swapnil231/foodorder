const express = require('express');
const mongoose = require('mongoose');
const config=require('./config/dev')
const PORT = process.env.PORT || 3001;
mongoose.connect(config.DB_URI).then(()=>console.log('connected'))
