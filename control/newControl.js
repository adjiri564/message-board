import {messages} from "./homeControl.js";

export const newControl = {
    get: (req, res)=> {
        res.render('form',{title: 'New Message'})
    },

    post:((req, res) => {
        const messageText = req.body.messageText;
        const messageUser = req.body.messageUser;
        messages.push({ text: messageText, user: messageUser, added: new Date() });
        res.redirect('/');
    })
    
}

