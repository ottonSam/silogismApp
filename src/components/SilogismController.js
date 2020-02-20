//const Silogismo = require('../models/Silogism');
const Auxiliar = require('./utils/Auxiliar');
const val = require('./utils/Validar');
const Modo = require('./utils/Modo');



module.exports = {
  Valida(Data) {
    let {idSilogismo, proposicaoMaior, proposicaoMenor, conclusao} = Data;
    if(idSilogismo[2] === 'SIL'){

      //Auxiliares
      var dadosAux = ['valid'],
      listPre = [proposicaoMaior[1], proposicaoMaior[2], proposicaoMenor[1],
      proposicaoMenor[2], conclusao[1], conclusao[2]];
      
      var listPreRed = Auxiliar.preRed(proposicaoMaior, proposicaoMenor, conclusao);
      var exteTerm = Auxiliar.exteTerm(proposicaoMaior, proposicaoMenor, conclusao);
      var termMed = Auxiliar.termMed(proposicaoMaior, proposicaoMenor, exteTerm);
      var forcePre = Auxiliar.forcePre(proposicaoMaior[0], proposicaoMenor[0], conclusao[0]);
      
      //Passa as verificações
      val.errIguais(proposicaoMaior, proposicaoMenor, conclusao, dadosAux);
      val.errQuantTerm(listPreRed.length, dadosAux);
      
      if(termMed.length != 0){  
        val.errTermMedCon(termMed[1], conclusao, dadosAux);
        val.errExtCon(listPre,termMed[1], termMed[3], dadosAux);
        val.errMedUni(termMed[2], dadosAux);
      } else {
        dadosAux[0] = 'invalid'
        dadosAux.push('Falta de termo medio') 
      }

      val.errQuantNeg(proposicaoMaior[0], proposicaoMenor[0], dadosAux);
      val.errQuantPart(proposicaoMaior[0], proposicaoMenor[0], dadosAux);
      val.concForcePre(forcePre, dadosAux);
      val.errAfAfNeg(proposicaoMaior[0], proposicaoMenor[0], conclusao[0], dadosAux);

      //Acha modo
      if(dadosAux[0] == 'valid'){
        if(termMed[0] == 'SP'){
          Modo.SP(proposicaoMaior[0], proposicaoMenor[0], conclusao[0], dadosAux);
        }
        if(termMed[0] == 'PP'){
          Modo.PP(proposicaoMaior[0], proposicaoMenor[0], conclusao[0], dadosAux);
        }
        if(termMed[0] == 'SS'){
          Modo.SS(proposicaoMaior[0], proposicaoMenor[0], conclusao[0], dadosAux);
        }
        if(termMed[0] == 'PS'){
          Modo.PS(proposicaoMaior[0], proposicaoMenor[0], conclusao[0], dadosAux);
        }
      }

      //Grava
      var silogismo = ({
        idSilogismo,
        proposicaoMaior,
        proposicaoMenor,
        conclusao,
        dadosAux,
      });

      return silogismo;
    }
    if(idSilogismo[2] == 'RED'){
      let {idSilogismo, proposicaoMaior, proposicaoMenor, conclusao, dadosAux} = Data;

      var listPreRed = Auxiliar.preRedRed(proposicaoMaior, proposicaoMenor, conclusao);

      //Passa as verificações
      val.errQuantTermRed(listPreRed, dadosAux);
      val.errFigPerRed(proposicaoMaior[4], proposicaoMenor[5], dadosAux);
      val.errFigRed(proposicaoMaior[3], proposicaoMenor[3], conclusao[3], dadosAux);
      val.errTerPosRed(proposicaoMaior, proposicaoMenor, conclusao, dadosAux);

      //Grava
      var reducao = ({
        idSilogismo,
        proposicaoMaior,
        proposicaoMenor,
        conclusao,
        dadosAux,
      });
      return reducao;
      //return res.send(listPreRed);
      }
    }
}