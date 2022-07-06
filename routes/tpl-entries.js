const express = require('express');
const ReactDOMServer = require('react-dom/server');
const React = require('react');

const Entries = require('../views/entries/Entries');
const EditEntry = require('../views/entries/EditEntry');
const NewEntry = require('../views/entries/NewEntry');
const ShowEntry = require('../views/entries/ShowEntry');
const { Entry } = require('../db/models');

const router = express.Router();

// router.get('/all-the-entries', async (req, res) => {
router.get('/', async (req, res) => {
  const entries = await Entry.findAll();

  const entriesView = React.createElement(Entries, { entries });
  const html = ReactDOMServer.renderToStaticMarkup(entriesView);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

// router.get('/new-entry-form', async (req, res) => {
  router.get('/new', async (req, res) => {
  const newEntry = React.createElement(NewEntry, {});
  const html = ReactDOMServer.renderToStaticMarkup(newEntry);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

/* router.post('/create-new-post', async (req, res) => {
  const entry = await Entry.create(req.body.entry);
  try {
    await entry.save();
    // throw Error('You shall not pass');
    res.redirect(`show-one-entry/${entry.id}`);
  } catch (err) {
    const newEntry = React.createElement(NewEntry, { errors: [err] });
    const html = ReactDOMServer.renderToStaticMarkup(newEntry);
    res.write('<!DOCTYPE html>');
    res.end(html);
  }
}); */

router.get('/:id', async (req, res) => {
  const entry = await Entry.findOne({ where: { id: req.params.id } });

  const showEntry = React.createElement(ShowEntry, { entry });
  const html = ReactDOMServer.renderToStaticMarkup(showEntry);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

router.get('/edit/:id', async (req, res) => {
  const entry = await Entry.findOne({ where: { id: req.params.id } });

  const editEntry = React.createElement(EditEntry, { entry });
  const html = ReactDOMServer.renderToStaticMarkup(editEntry);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

/* router.post('/update-entry/:id', async (req, res) => {
  const entry = await Entry.findOne({ where: { id: req.params.id } });
  const { singer, songTitle } = req.body.entry;
  entry.singer = singer;
  entry.songTitle = songTitle;
  entry.save();
  return res.redirect(`/show-one-entry/${entry.id}`);
}); */

/* router.get('/delete-entry/:id', async (req, res) => {
  await Entry.destroy({ where: { id: req.params.id } });
  return res.redirect('/all-the-entries');
}); */

module.exports = router;
