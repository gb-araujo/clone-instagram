import './LadoDireito.css'
import Perfil from './componentes/Perfil'
import profilepic from'../Feed/imagens/pfp.jpg'
import Sugestoes from './componentes/Sugestoes'
export default function LadoDireito() {
    return(
        <div className='LadoDireito'>
            <Perfil FotoPerfil={profilepic} NomeUsuario='niryon ' NomePerfil='Gabriel Araujo'/>
            <Sugestoes UserImgSugest={profilepic} UserNameSugest="roberto "/>
            
        </div>
    )
}