const UserData = require('../models/UserData')

UserData.find({}).remove(() => {
    let paige = UserData.create({
        userName: "Paige",
        userdetails: "brown"
    }).then(post => {
        Promise.all([
            UserData.create({
                title: 'hello',
                content: 'world'
            }).then(data => {
                post.data.push(data)
            }).then(() => {
                post.save()
            })
        ])
    })
})