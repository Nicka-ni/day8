const users = [
    {name:"Dima", age:19},
    {nama:"Yaroslav", age:19}
]

user= require('./models/UserModel')
module.exports = function(app){
app.get("/", (req, res) => {
    user.find((err, users) => {
        if(err)
            res.send(err);
            res.json(users);
    })
})

app.post("/", (req, res) => {
    res.send(users);
})
}