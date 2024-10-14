export const messages = [
    {
        text: 'Hello Daniel',
        user: 'Daniel',
        added: new Date()
    },
    {
        text: 'Hi Susan',
        user: 'Susan',
        added: new Date()
    },
    {
        text: 'Holla Cynthia',
        user: 'Cynthia',
        added: new Date()
    },
    {
        text: 'Hello Jasmine',
        user: 'Jasmine',
        added: new Date()
    }
]

export const homeController = {
    get: (req,res)=>{
        res.render('home',{title: 'Mini Message board', messages:messages})
    }
}
