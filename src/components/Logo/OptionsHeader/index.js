import './style.css'


const textOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHAS ESTANTE'];

function OptionsHeader (){
    return(
        <ul className='opcoes'>
          {textOpcoes.map((texto) =>(
           <li className='opcao'><p>{texto}</p></li>
          ))}
        </ul>
        
    )
}

export default OptionsHeader;