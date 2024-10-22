import db from '../db/queries.js'

async function getUsernames(req,res){
    const usernames = await db.getAllUsernames();
    res.render('home', {usernames:usernames})
}

async function usersDeletePost (req, res)  {
    const { username, text} = req.body;
    db.deleteMessage(username, text)
    res.redirect("/");
}

export default {
    getUsernames,
    usersDeletePost
}