const db = require('../../database/models');
const sequelize = db.sequelize;


const genresController = {
    'list': async (req, res) => {
       try {
           let genres = await db.Genre.findAll()

           let response = {
               meta : {
                   status: 200,
                   total: genres.length,
                   url: `${req.protocol}://${req.get('host')}${req.originalUrl}`
               },
               data: genres
           }
           return res.status(200).json(response)

       } catch (error) {
           return res.status(error.status || 500).json(error)
       } 
            
    },
    'detail': async (req, res) => {
        try {
            let genres = await db.Genre.findByPk(req.params.id)
 
            let response = {
                meta : {
                    status: 200,
                    total: genres.length,
                    url: `${req.protocol}://${req.get('host')}${req.originalUrl}${req.params.id}`
                },
                data: genres
            }
            return res.status(200).json(response)
 
        } catch (error) {
            return res.status(error.status || 500).json(error)
        } 
             
    }

}

module.exports = genresController;