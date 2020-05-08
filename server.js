const express = require('express')
const {MongoClient , ObjectID} = require('mongodb')
const bodyParser = require('body-parser')
var assert = require('assert');

const app = express()


app.use(bodyParser.json())

const mongo_url = 'mongodb://localhost:27017'
const database = 'rest-api'

MongoClient.connect(mongo_url , (err , client)=>{
    assert.equal(err, null, 'data base connexion failed')
    const db = client.db(database)

    app.post('/add_contact' ,(req , res)=>{
        let newContact = req.body
        db.collection('contacts').insertOne(newContact , (err , data)=>{
            if (err) res.send('cant add new contact')
            else res.send(data)
        })
    })

    app.get('/contacts' , (req , res) =>{
        db.collection('contacts').find().toArray((err , data)=>{
            if (err) res.send('cant send data')
            else res.send(data)
        })
        }
        )

        app.get('/modify/:id' , (req , res)=>{
            let idd = ObjectID(req.params.id)
            db.collection('contacts').findOne({_id : idd}, (req , data)=>{
                if (err) res.send('cant delete')
                else res.send(data)
            })
        })
    

        app.delete('/contacts/:id' , (req , res)=>{
            let id = ObjectID(req.params.id)
            db.collection('contacts').findOneAndDelete({_id : id} , (req , data)=>{
                if (err) res.send('cant delete')
                else res.send(data)
            })
        })

        app.put('/modify/:id' ,(req , res)=> {
            const id = ObjectID(req.params.id)
            const updateContact = req.body

            db.collection('contacts').findOneAndUpdate({_id : id} , {$set :{...updateContact}})
            .then(data => res.send({
                message : 'Updated',
                data : data
            }))
            .catch(err => console.log(err)
            )
        })


})




app.listen(4000 , (err) =>{
    if (err) console.log('server not running')
    else console.log('server running on 3000');
    
})