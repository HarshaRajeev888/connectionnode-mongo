const MongoClient = require('mongodb').MongoClient

const url = "mongodb://localhost:27017"

const client = new MongoClient(url)




async function run(){
    try{
        await client.connect()
        const database = client.db('fruits')
        const collection =database.collection('users')


        //const query = {name:"Harsha"}
        const query = {name:"Roshan"}
                    
        const user =await collection.findOne(query)
        console.log(user)

    }catch(error){
        console.log(Error)
    }finally{
      await client.close()      
    }

}

run()