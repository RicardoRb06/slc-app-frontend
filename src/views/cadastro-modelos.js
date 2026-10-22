import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Stack from '@mui/material/Stack';

import Card from '../components/card';
import FormGroup from '../components/form-group';

import { mensagemSucesso, mensagemErro } from '../components/toastr';

import '../custom.css';

import axios from 'axios';
import { BASE_URL } from '../config/axios';

function CadastroModelos() {
  const { idParam } = useParams();

  const navigate = useNavigate();

  const baseURL = `${BASE_URL}/modelos`;

  const [id, setId] = useState('');
  const [nome, setNome] = useState('');
  const [marca, setMarca] = useState('');
  const [categoria, setCategoria] = useState([]);

  const [dados, setDados] = useState([]);

  function inicializar() {
    if (idParam == null) {
      setId('');
    } else {
      setId(dados.id);
      setNome(dados.nome);
      setMarca(dados.marca);
      setCategoria(dados.categorias);
    }
  }

  async function salvar() {
    let data = {
      id,
      nome,
    };
    data = JSON.stringify(data);
    if (idParam == null) {
      await axios
        .post(baseURL, data, {
          headers: { 'Content-Type': 'application/json' },
        })
        .then(function (response) {
          mensagemSucesso(`Marca ${nome} cadastrada com sucesso!`);
          navigate(`/listagem-modelos`);
        })
        .catch(function (error) {
          mensagemErro(error.response.data);
        });
    } else {
      await axios
        .put(`${baseURL}/${idParam}`, data, {
          headers: { 'Content-Type': 'application/json' },
        })
        .then(function (response) {
          mensagemSucesso(`Marca ${nome} alterada com sucesso!`);
          navigate(`/listagem-modelos`);
        })
        .catch(function (error) {
          mensagemErro(error.response.data);
        });
    }
  }

  async function buscar() {
    await axios.get(`${baseURL}/${idParam ? idParam : ""}`).then((response) => {
      setDados(response.data);
    });
    setId(dados.id);
    setNome(dados.nome)
    setMarca(dados.marca)
    setCategoria(dados.categorias)
  }

  useEffect(() => {
    buscar(); // eslint-disable-next-line
  }, [id]);

  if (!dados) return null;

  return (
    <div className='container'>
      <Card title='Cadastro de Modelo'>
        <div className='row'>
          <div className='col-lg-12'>
            <div className='bs-component'>
              <FormGroup label='Nome: *' htmlFor='inputNome'>
                <input
                  type='text'
                  id='inputNome'
                  value={nome}
                  className='form-control'
                  name='nome'
                  onChange={(e) => setNome(e.target.value)}
                />
              </FormGroup>
              <FormGroup label='Marca: *' htmlFor='inputMarca'>
                <input
                  type='text'
                  id='inputMarca'
                  value={marca}
                  className='form-control'
                  name='marca'
                  onChange={(e) => setMarca(e.target.value)}
                />
              </FormGroup>
              <FormGroup label='Categoria: *' htmlFor='inputCategoria'>
                <input
                  type='text'
                  id='inputCategoria'
                  value={categoria}
                  className='form-control'
                  name='categoria'
                  onChange={(e) => setCategoria(e.target.value)}
                />
              </FormGroup>
              <Stack spacing={1} padding={1} direction='row'>
                <button
                  onClick={salvar}
                  type='button'
                  className='btn btn-success'
                >
                  Salvar
                </button>
                <button
                  onClick={inicializar}
                  type='button'
                  className='btn btn-danger'
                >
                  Cancelar
                </button>
              </Stack>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default CadastroModelos;