export default function(server) {

    server.db.loadData({
        persons:[
            { id: 1, firstName:'Amitab', lastName:'Bachchan', age:73, profession:'Actor', imageUrl:'amitab.jpg' },
            { id: 2, firstName:'Virat', lastName:'Kohli', age:31, profession:'Cricket', imageUrl:'virat-kohli.jpg' },
            { id: 3, firstName:'Shreya', lastName:'Ghoshal', age:35, profession:'Singer', imageUrl:'' },
            { id: 4, firstName:'Sourav', lastName:'Ganguly', age:45, profession:'Cricket', imageUrl:'ganguly.jpg' }
        ]
    })
}
