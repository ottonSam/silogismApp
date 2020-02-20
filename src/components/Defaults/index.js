import React from 'react';

// import { Container } from './styles';

const Defaults = () =>

<nav className="navbar navbar-expand-lg navbar-light bg-light static-top mb-5 shadow">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">silogismApp</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
    <div className="collapse navbar-collapse" id="navbarResponsive">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item-active">
          <a className="nav-link btn btn-outline-primary text-primary" href="/notes">Anotações</a>
        </li>
        <li className="nav-item-active">
          <a className="nav-link btn btn-outline-primary text-primary ml-2" href="/silogism">Validação</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

;

export default Defaults;
