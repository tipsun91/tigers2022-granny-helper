const express = require('express')
const ReactDOMServer = require('react-dom/server');
const React = require('react');
const loadRouter = require('express').Router()
const multer  = require("multer");
const upload = multer({dest:"uploads"});
const up = require('../public/load')

const Load = require('../views/Load');


loadRouter.get('/',  (req, res)  => {
    const load = React.createElement(Load, {title: 'LoadPic'});
    const html = ReactDOMServer.renderToStaticMarkup(load);
    res.write('<!DOCTYPE html>');
    res.end(html);
})

loadRouter.post('/', upload.single("filedata"), function (req, res, next) {
    let filedata = req.file;

    console.log(filedata);
    if(!filedata)
        res.send("Ошибка при загрузке файла");
    else
        console.log(filedata.path)
        res.send("Файл загружен");
})
module.exports = loadRouter;