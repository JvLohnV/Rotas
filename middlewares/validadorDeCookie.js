const jwt = require("jsonwebtoken")

function validadorDeCookies(req, res, next) {
    const token = req.cookies.TokenaulaBE
    
     
    if (!token) {
        return res.status(401).send({ mensagem: 'Não autorizado' })
    }

    try {
        const decodificado = jwt.verify(token, process.env.chave_criptografia)
        next();
    } catch {
        return res.status(401).send({ mensagem: 'Não autorizado' })
    }

}

module.exports = { validadorDeCookies }