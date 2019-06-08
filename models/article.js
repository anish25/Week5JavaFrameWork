const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchemna = new Schema({
    title: {type: String, required: true },
    content: String,
    date: Date,
    author: [Strings],
    hero: String,
});

const Article = new mongoose.model('Article',articleSchema);

module.exports =Article;
