import express from 'express'
import * as pictures from '../controller/picture'
import Auth from '../utils/middleware'

const routes = express.Router()

routes.get('/', pictures.getAll)
routes.get('/:id', pictures.getOne)
// routes.post('/', Auth.authenticateToken, pictures.create)
routes.put('/:id', Auth.authenticateToken, pictures.update)
routes.delete('/:id', Auth.authenticateToken, pictures.remove)

routes.post('/upload', Auth.authenticateToken, pictures.upload)


// routes.post('/upload', upload.single('image'), (req, res) => {
//   console.log('UPLOAD REQ: ', req.file)
//   res.send(req.file)
// })

export default routes
