/**
 * RispostaController
 *
 * @description :: Server-side logic for managing rispostas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  //TODO:fixa errore 500
  modificaRisposta:function (req,res,next) {
    Risposta.update({id: req.param('risModificata')}).set({testo: req.param('txtRisposta')}).exec(function (arg, err) {
      if (err) next(err);
      res.redirect("/Sondaggio/riepilogo?id="+req.param('idSond'));
    });
  }
}

