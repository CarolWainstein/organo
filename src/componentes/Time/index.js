import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => {
    return (
        (props.colaboradores.length > 0) && <section className='time' style={{backgroundColor: props.corSecundaria}}>
            <div className='container'>
                <h3>{props.nome}</h3>
                <div style={{color: props.corPrimaria}} className='linha2'></div>
            </div>
            <div className='colaboradores'>
            {props.colaboradores.map(colaborador => <Colaborador
            corDeFundo={props.corPrimaria}
            key={colaborador.nome} 
            nome={colaborador.nome} 
            cargo={colaborador.cargo} 
            img={colaborador.imagem}
            />)}
            </div>
        </section>
    )
}

export default Time