import db from '../db/queries.js'

async function createUsernameGet(req, res) {
    res.render('form')
}

async function createUsernamePost(req,res) {
    const {username, text} = req.body;
    await db.insertUsername(username, text);
    res.redirect('/');
}

export default{
    createUsernameGet,
    createUsernamePost
}