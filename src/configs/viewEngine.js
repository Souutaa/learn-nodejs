import express from 'express';

let configViewEngine = (app) => {
  app.use(express.static('/src/public'));
  app.set('views', './src/views');
  app.set('view engine', 'ejs');
  //set đường link lấy vei
};

export default configViewEngine;
