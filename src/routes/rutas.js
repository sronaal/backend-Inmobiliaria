const routes = require("express").Router()

// Controladores 
const controllerUser = require('../controller/controllerUser')
const controllerInmueble = require('../controller/controllerInmueble')
const controllerAdmin = require('../controller/controllerAdministrador')

// Middlewares para Auth
const protedVerify = require('../config/validatedAuth-Jwt')

routes.post('/users/register',controllerUser.registrarUsuario)
routes.post('/users/login',controllerUser.iniciarSesion)
routes.post('/users/valid',controllerUser.validateUser)

routes.post('/inmueble/create',controllerInmueble.crearInmueble)

routes.get('/inmueble/listar',controllerInmueble.listarInmuebles)

routes.get('/admin/users/',protedVerify.validarToken,protedVerify.validarRol(["Administrador"]),controllerAdmin.listarUsuarios)

module.exports = routes