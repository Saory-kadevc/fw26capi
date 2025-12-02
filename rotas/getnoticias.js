module.exports = (app)=>{
    app.get('/noticias', async (req, res)=>{
        try{
            console.log("teste1")
            await app.dbClient.connect();
            res.send("teste")
            
            // const resultado = await app.dbClient.db('portalnoticias')
            // .collection('noticias')
            // .find()
            // .toArray();
            // res.json(resultado);
        }catch(error){
            res.send("erro:"+error)
        }finally{
            await app.dbClient.close()
        }
    })

}

