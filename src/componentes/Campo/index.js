import './CampoTexto.css'

const CampoTexto = ({type = 'text', label, placeholder, valor, obrigatorio = false, aoAlterado}) => {

    const aoDigitado = (evento) => {
        aoAlterado(evento.target.value)
    }

    return (
        <div className={`campo-texto campo-${type}`}>
            <label>{label}</label>
            <input 
                type={type} 
                value={valor} 
                onChange={aoDigitado} 
                required={obrigatorio} 
                placeholder={placeholder}
            />
        </div>
    )

}

export default CampoTexto