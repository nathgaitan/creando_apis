const express = require('express');
const router = express.Router();
const {list,detail,newest,recommended,add,create,edit,update,remove,destroy} = require('../../controllers/api/moviesController');

router
     .get('/', list)
     .get('/newest', newest)
     .get('/recommended', recommended)
     .get('/:id', detail)
     //Rutas exigidas para la creación del CRUD
     .get('/add', add)
     .post('/create', create)
     .get('/edit/:id', edit)
     .put('/update/:id', update)
     .get('/remove/:id', remove)
     .delete('delete/:id', destroy)

module.exports = router;