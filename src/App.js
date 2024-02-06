import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';
import Titulo from './componentes/Titulo';

function App() {

    class ClasseTime {
        nome
        corPrimaria
        corSecundaria

        constructor (nome, corPrimaria, corSecundaria) {
            this.nome = nome
            this.corPrimaria = corPrimaria
            this.corSecundaria = corSecundaria
        }
    }

    const programacao = new ClasseTime ('Programação', '#57C278', '#D9f7E9');
    const frontEnd = new ClasseTime ('Front-end', '#82CFFA', '#E8F8FF');
    const dataScience = new ClasseTime ('Data Science', '#A6D157', '#F0F8E2');
    const devops = new ClasseTime('Devops', '#E06B69', '#FDE7E8');
    const uxEDesing = new ClasseTime('UX e Desing', '#DB6EBF', '#FAE9F5');
    const mobile = new ClasseTime('Mobile', '#FFBA05', '#FFF5D9');
    const inovacaoEGestao = new ClasseTime('Inovação e Gestão', '#FF8A29', '#FFEEDF');

    const times = [programacao, frontEnd, dataScience, devops, uxEDesing, mobile, inovacaoEGestao]

    const [colaboradores, setColaboradores] = useState([])
    const aoNovoColaboradorAdicionado = (colaborador) => {
        setColaboradores([...colaboradores, colaborador])
    }

    return (
        <div className="App">
            <Banner/>
            <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
            <Titulo/>
            {times.map(time => <Time 
            key={time.nome} 
            nome={time.nome} 
            corPrimaria={time.corPrimaria} 
            corSecundaria={time.corSecundaria}
            colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
            />)}
            <Rodape/>
        </div>
    );
}

export default App;