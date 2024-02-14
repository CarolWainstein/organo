import Colaborador from '../Colaborador'
import './Time.css'
import hexToRgba from 'hex-to-rgba';

const Time = (props) => {
    return (
        (props.colaboradores.length > 0) && <section className='time' style={{backgroundColor: hexToRgba(props.cor, '0.6')}}>
            <input onChange={evento => props.mudarCor(evento.target.value, props.id)} value={props.cor} type='color' className='input-cor'/>
            <div className='container'>
                <h3>{props.nome}</h3>
                <div style={{color: props.cor}} className='linha2'></div>
            </div>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => {
                    

                    return (<Colaborador
                    corDeFundo={props.cor}
                    key={colaborador.nome} 
                    nome={colaborador.nome} 
                    cargo={colaborador.cargo} 
                    img={colaborador.imagem}
                    aoDeletar={props.aoDeletar}
                    id={colaborador.id}
                    favorito={colaborador.favorito}
                    aoFavoritar={props.aoFavoritar}
                    />);
                })}
            </div>
        </section>
    )
}

export default Time