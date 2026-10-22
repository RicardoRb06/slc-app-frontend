import CadastroMarcas from './views/cadastro-marcas';
import CadastroModelos from './views/cadastro-modelos';
import CadastroCategorias from './views/cadastro-categorias';
import CadastroCaracteristicas from './views/cadastro-caracteristicas';
import ListagemMarcas from './views/listagem-marcas';
import ListagemModelos from './views/listagem-modelos';
import ListagemCategorias from './views/listagem-categorias';
import ListagemCarros from './views/listagem-carros';
import ListagemCaracteristicas from './views/listagem-caracteristicas';
import ListagemLocacoes from './views/listagem-locacoes';
import ListagemUsuarios from './views/listagem-usuarios';
import ListagemCnh from './views/listagem-cnh';

import { Route, Routes, BrowserRouter } from 'react-router-dom';

function Rotas(props){
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/cadastro-marcas/:idParam?' element={<CadastroMarcas />} />
                <Route path='/cadastro-modelos/:idParam?' element={<CadastroModelos />} />
                <Route path='/cadastro-categorias/:idParam?' element={<CadastroCategorias />} />
                <Route path='/cadastro-caracteristicas/:idParam?' element={<CadastroCaracteristicas />} />
                <Route path='/listagem-marcas' element={<ListagemMarcas />} />
                <Route path='/listagem-modelos' element={<ListagemModelos />} />
                <Route path='/listagem-categorias' element={<ListagemCategorias />} />
                <Route path='/listagem-carros' element={<ListagemCarros />} />
                <Route path='/listagem-caracteristicas' element={<ListagemCaracteristicas />} />
                <Route path='/listagem-locacoes' element={<ListagemLocacoes />} />
                <Route path='/listagem-usuarios' element={<ListagemUsuarios />} />
                <Route path='/listagem-cnh' element={<ListagemCnh />} />
            </Routes>
        </BrowserRouter>
    )
}   

export default Rotas;