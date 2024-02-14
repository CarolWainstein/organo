import './Colaborador.css'
import { AiFillCloseCircle } from 'react-icons/ai';
import { FaHeart, FaRegHeart } from "react-icons/fa";

const Colaborador = ({favorito, id, nome, imagem, cargo, corDeFundo, aoDeletar, aoFavoritar}) => {
    function favoritar() {
        aoFavoritar(id)
    }
    
    return (<div className='colaborador'>

        <AiFillCloseCircle 
            size={25} 
            className="deletar" 
            onClick={() => aoDeletar(id)} 
        />

        <div className='cabecalho' style={{backgroundColor: corDeFundo}}>
            <img src={imagem} alt={nome}></img>
        </div>

        <div className='rodape'>
            <h4>{nome}</h4>
            <h5>{cargo}</h5>
            <div className='favoritar'>
                {favorito 
                    ? <FaHeart size={25} onClick={favoritar}/> 
                    : <FaRegHeart size={25} onClick={favoritar}/>
                }
            </div>
        </div>

    </div>)
}

export default Colaborador