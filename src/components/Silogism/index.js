import React from 'react';
import Axios from 'axios';

import Default from '../Defaults';

class Silogism extends React.Component {
  constructor() {
    super();
    this.state = {
      p1q: "A", p1t1: "", p1t2: "",
      p2q: "A", p2t2: "", p2t1: "",
      cq: "A", ct1: "", ct2: ""
    };
    this.onChange = (evento) => {
      const state = Object.assign({}, this.state);
      const campo = evento.target.name;
      state[campo] = evento.target.value.toUpperCase();
      this.setState(state);
    };

    this.onSubmit = (evento) => {
      const Data = {
        "idSilogismo": ["samu", "euu", "SIL"],
        "proposicaoMaior": [this.state.p1q, this.state.p1t1, this.state.p1t2],
        "proposicaoMenor": [this.state.p2q, this.state.p2t1, this.state.p2t2],
        "conclusao": [this.state.cq, this.state.ct1, this.state.ct2]
      };

      console.log(Data);
      Axios({
        method: 'post',
        url: 'https://silogism-api.herokuapp.com/',
        data: Data
      }).then(function(axiosData){
        console.log(axiosData);
      });

    };
  }

  render() {
    return (
      <div>
        <Default />
        <div className='container-fluid'>
          <div className='row text-primary'>
            <div className='form-group col-2'>
              Q. Prep. Maior
            <select className='form-control' name='p1q' onChange={this.onChange} value={this.state.p1q}>
                <option value='A'>Todos ou Todo</option>
                <option value='A'>O ou A</option>
                <option value='E'>Nenhum ou Nenhuma</option>
                <option value='I'>Algum ou Alguma</option>
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
          <button className='btn btn-primary' onClick={this.onSubmit}>Validar</button>
        </div>
      </div>
    )
  }
}

export default Silogism;