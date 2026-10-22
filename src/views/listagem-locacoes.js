import React from 'react';

import Card from '../components/card';

import { mensagemSucesso, mensagemErro } from '../components/toastr';

import '../custom.css';

import { useNavigate } from 'react-router-dom';

import Stack from '@mui/material/Stack';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import axios from 'axios';
import { BASE_URL } from '../config/axios';

const baseURL = `${BASE_URL}/locacoes`;

function ListagemLocacoes() {
  const navigate = useNavigate();

  const cadastrar = () => {
    navigate(`/cadastro-locacoes`);
  };

  const editar = (id) => {
    navigate(`/cadastro-locacoes/${id}`);
  };

  const [dados, setDados] = React.useState(null);

  async function excluir(id) {
    let data = JSON.stringify({ id });
    let url = `${baseURL}/${id}`;
    console.log(url);
    await axios
      .delete(url, data, {
        headers: { 'Content-Type': 'application/json' },
      })
      .then(function (response) {
        mensagemSucesso(`Locação excluída com sucesso!`);
        setDados(
          dados.filter((dado) => {
            return dado.id !== id;
          })
        );
      })
      .catch(function (error) {
        mensagemErro(`Erro ao excluir a locação`);
      });
  }

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setDados(response.data);
    });
  }, []);

  if(!dados) return null;

  return (
    <div className='container'>
      <Card title='Listagem de Locações'>
        <div className='row'>
          <div className='col-lg-12'>
            <div className='bs-component'>
              <button
                type='button'
                className='btn btn-warning'
                onClick={() => cadastrar()}
              >
                Nova Locação
              </button>
              <table className='table table-hover'>
                <thead>
                  <tr>
                    <th scope='col'>Carro</th>
                    <th scope='col'>Usuário</th>
                    <th scope='col'>Data de retirada</th>
                    <th scope='col'>Data de devolução</th>
                    <th scope='col'>Local de retirada</th>
                    <th scope='col'>Local de devolução</th>
                    <th scope='col'>Status</th>
                    <th scope='col'>Valor da diária</th>
                    <th scope='col'>Avaliação</th>
                    <th scope='col'>Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {dados.map((dado) => (
                    <tr key={dado.id}>
                      <td>{dado.carro}</td>
                      <td>{dado.usuario}</td>
                      <td>{dado.dataRetirada}</td>
                      <td>{dado.dataDevolucao}</td>
                      <td>{dado.localRetirada}</td>
                      <td>{dado.localDevolucao}</td>
                      <td>{dado.status}</td>
                      <td>{dado.valorDiaria}</td>
                      <td>{(dado.status === 'concluída') ? dado.avaliacao + "/10" : "-"}</td>
                      <td>
                        <Stack spacing={1} padding={0} direction='row'>
                          <IconButton
                            aria-label='edit'
                            onClick={() => editar(dado.id)}
                          >
                            <EditIcon />
                          </IconButton>
                          <IconButton
                            aria-label='delete'
                            onClick={() => excluir(dado.id)}
                          >
                            <DeleteIcon />
                          </IconButton>
                        </Stack>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>{' '}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default ListagemLocacoes;