import React from 'react';
import 'bootswatch/dist/flatly/bootstrap.css';

import NavbarItem from './navbarItem';

function Navbar(props) {
  return (
    <div className='navbar navbar-expand-lg fixed-top navbar-dark bg-primary'>
      <div className='container'>
        <a href='/' className='navbar-brand'>
          SLC
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarResponsive'
          aria-controls='navbarResponsive'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarResponsive'>
          <ul className='navbar-nav'>
            <NavbarItem
              render='true'
              href='/listagem-marcas'
              label='Marcas'
            />

            <NavbarItem
              render='true'
              href='/listagem-modelos'
              label='Modelos'
            />

            <NavbarItem
              render='true'
              href='/listagem-categorias'
              label='Categorias'
            />

            <NavbarItem
              render='true'
              href='/listagem-carros'
              label='Carros'
            />

            <NavbarItem
              render='true'
              href='/listagem-caracteristicas'
              label='Características de Carros'
            />

            <NavbarItem
              render='true'
              href='/listagem-locacoes'
              label='Locações'
            />

            <NavbarItem
              render='true'
              href='/listagem-usuarios'
              label='Usuários'
            />

            <NavbarItem
              render='true'
              href='/listagem-cnh'
              label='CNH'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;