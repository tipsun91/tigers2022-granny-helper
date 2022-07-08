const express = require('express')
const ReactDOMServer = require('react-dom/server');
const React = require('react');
const loadRouter = require('express').Router()
const multer  = require("multer");
const upload = multer({dest:"uploads"});
const up = require('../public/load')
const { Image } = require('../db/models')

const Load = require('../views/Load');


loadRouter.get('/',  (req, res)  => {
    const load = React.createElement(Load, {title: 'LoadPic'});
    const html = ReactDOMServer.renderToStaticMarkup(load);
    res.write('<!DOCTYPE html>');
    // console.log(req.local.user.id)
    res.end(html);

})

loadRouter.post('/', upload.single("filedata"), async function  (req, res, next) {
    let filedata = req.file;

    console.log(filedata);
    if(!filedata)
        res.send("Ошибка при загрузке файла");
    else
        await Image.create({user_id: res.locals.user.id, title: filedata.originalname, image_url: filedata.path})
        res.send("Файл загружен");
})
module.exports = loadRouter;
