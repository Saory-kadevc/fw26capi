module.exports = (app)=>{
    app.get('/noticias', async (req, res)=>{
        try{
            const connect = await app.dbClient.connect();
            console.log(connect)
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