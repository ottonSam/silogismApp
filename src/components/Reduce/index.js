import React from 'react';

const Valida = require('../SilogismController')
import Irreduce from '../Irreduce/Reduce'

class Reduce extends React.Component {
    constructor() {
        super();
        this.state = {
            p1q: "A", p1t1: "", p1t2: "",
            p2q: "A", p2t2: "", p2t1: "",
            cq: "A", ct1: "", ct2: "", r: false
        };
        this.onChange = (evento) => {
            const state = Object.assign({}, this.state);
            const campo = evento.target.name;
            state[campo] = evento.target.value.toUpperCase();
            this.setState(state);
        };

        this.onSubmit = (evento) => {
            const np1 = this.props.newdata['proposicaoMaior'];
            const np2 = this.props.newdata['proposicaoMenor'];
            const nc = this.props.newdata['conclusao'];

            const Data = {
                "idSilogismo": ["samu", "euu", "RED"],
                "proposicaoMaior": [np1[0], np1[1], np1[2], this.state.p1q, this.state.p1t1, this.state.p1t2],
                "proposicaoMenor": [np2[0], np2[1], np2[2], this.state.p2q, this.state.p2t1, this.state.p2t2],
                "conclusao": [nc[0], nc[1], nc[2], this.state.cq, this.state.ct1, this.state.ct2],
                "dadosAux": this.props.newdata['dadosAux']
            };

            const state = Object.assign({}, this.state);
            const NewData = Valida.Valida(Data);
            state['md'] = NewData;
            this.setState(state);

            if (NewData['dadosAux'][0] === 'valid') {
                console.log('valid');

                state['r'] = 2;
                this.setState(state);
            }
            if (NewData['dadosAux'][0] === 'invalid') {
                console.log('invalid');

                state['r'] = 0;
                this.setState(state);
                var x = 'encontramos os seguintes erros';
                var aux = '';
                for (var i = 4; i < NewData['dadosAux'].length; i++) {
                    if (i == 4) {
                        x = x + ': ' + NewData['dadosAux'][i] + '; ';
                        aux = aux + x
                    }
                    else {
                        x = NewData['dadosAux'][i] + ' ';
                        aux = aux + x
                    }
                }
                alert(aux)
                //aq salva o dado com o erro
            }
        };
    }

    render() {
        var rd = <button className='btn btn-primary' onClick={this.onSubmit}>Validar</button>

        if (this.state.r == 2) {
            rd = <Irreduce newdata={this.state.md} />;
        }

        return (
            <div>
                <div>
                    <p className='alert alert-primary row'>Formulario de redução para {this.props.newdata['dadosAux'][3]}</p>
                    <div className='row text-primary'>
                        <div className='form-group col-2'>
                            Q. Prep. Maior
            <select className='form-control' name='p1q' onChange={this.onChange} value={this.state.p1q}>
                                <option value='A'>Todos ou Todo</option>
                                <option value='A'>O ou A</option>
                                <option value='E'>Nenhum ou Nenhuma</option>
                                <option value='I'>Algum ou Alguma</option>
                                <option value='O'>Algum não ou Alguma não</option>
                            </select>
                        </div>
                        <div className='col form-group'>
                            Termo 1 Prep. Maior
            <input required className='form-control' type='text' name='p1t1' onChange={this.onChange} value={this.state.p1t1}></input>
                        </div>
                        <div className='col form-group'>
                            Termo 2 Prep. Maior
            <input required className='form-control' type='text' name='p1t2' onChange={this.onChange} value={this.state.p1t2}></input>
                        </div>
                    </div>

                    <div className='row text-primary'>
                        <div className='form-group col-2'>
                            Q. Prep. Menor
            <select className='form-control' name='p2q' onChange={this.onChange} value={this.state.p2q}>
                                <option value='A'>Todos ou Todo</option>
                                <option value='A'>O ou A</option>
                                <option value='E'>Nenhum ou Nenhuma</option>
                                <option value='I'>Algum ou Alguma</option>
                                <option value='O'>Algum não ou Alguma não</option>
                            </select>
                        </div>
                        <div className='col form-group'>
                            Termo 1 Prep. Menor
            <input required className='form-control' type='text' name='p2t1' onChange={this.onChange} value={this.state.p2t1}></input>
                        </div>
                        <div className='col form-group'>
                            Termo 2 Prep. Menor
            <input required className='form-control' type='text' name='p2t2' onChange={this.onChange} value={this.state.p2t2}></input>
                        </div>
                    </div>

                    <div className='row text-primary'>
                        <div className='form-group col-2'>
                            Q. Conclusão
            <select className='form-control' name='cq' onChange={this.onChange} value={this.state.cq}>
                                <option value='A'>Todos ou Todo</option>
                                <option value='A'>O ou A</option>
                                <option value='E'>Nenhum ou Nenhuma</option>
                                <option value='I'>Algum ou Alguma</option>
                                <option value='O'>Algum não ou Alguma não</option>
                            </select>
                        </div>
                        <div className='col form-group'>
                            Termo 1 Conclusão
            <input required className='form-control' type='text' name='ct1' onChange={this.onChange} value={this.state.ct1}></input>
                        </div>
                        <div className='col form-group'>
                            Termo 2 Conclusão
            <input required className='form-control' type='text' name='ct2' onChange={this.onChange} value={this.state.ct2}></input>
                        </div>
                    </div>
                </div>
                {rd}
            </div>
        )
    }
}
export default Reduce;
