import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';
import Titulo from './componentes/Titulo';
//      Para adicionar um id personalizado:
import { v4 as uuidv4 } from 'uuid'; 

function App() {

    class ClasseTime {
        nome
        cor
        id

        constructor (nome, cor) {
            this.nome = nome;
            this.cor = cor;
            this.id = uuidv4();
        }
    }

    const programacao = new ClasseTime ('Programação', '#57C278');
    const frontEnd = new ClasseTime ('Front-end', '#82CFFA');
    const dataScience = new ClasseTime ('Data Science', '#A6D157');
    const devops = new ClasseTime('Devops', '#E06B69');
    const uxEDesing = new ClasseTime('UX e Desing', '#DB6EBF');
    const mobile = new ClasseTime('Mobile', '#FFBA05');
    const inovacaoEGestao = new ClasseTime('Inovação e Gestão', '#FF8A29');

    const [times, setTimes] = useState ([programacao, frontEnd, dataScience, devops, uxEDesing, mobile, inovacaoEGestao])

    const [colaboradores, setColaboradores] = useState([])
    const aoNovoColaboradorAdicionado = (colaborador) => {
        colaborador.id = uuidv4();
        colaborador.favorito = false;
        setColaboradores([...colaboradores, colaborador])
    }

    function detelarColaborador(id) {
        setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id))
    }

    function mudarCorDoTime(cor, id) {
        setTimes(times.map(time => {
            if(time.id === id) {
                time.cor = cor;
            }
            return time;
        }));
    }

    function cadastrarTime(novoTime) {
        setTimes([...times, {...novoTime, id: uuidv4()}])

    }

    function botaoFavorito(id) {
        setColaboradores(colaboradores.map(
                    colaborador => {
            if(colaborador.id ===id){
                colaborador.favorito = !colaborador.favorito
            };
            return colaborador
        }))  
    }

    return (
        <div className="App">
            <Banner/>
            <Formulario 
                times={times.map(time => time.nome)} 
                aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}
                cadastrarTime={cadastrarTime}
            />
            <section className='times'>
                <Titulo/>
                {times.map(time => 
                    <Time 
                        mudarCor={mudarCorDoTime}
                        key={time.nome} 
                        nome={time.nome} 
                        cor={time.cor}
                        id={time.id}
                        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
                        aoDeletar={detelarColaborador}
                        aoFavoritar={botaoFavorito}
                    />
                )}
            </section>
            <Rodape/>
        </div>
    );
}

export default App;