import './LadoDireito.css'
import Perfil from './componentes/Perfil'
import profilepic from'../Feed/imagens/pfp.jpg'
import Sugestoes from './componentes/Sugestoes'
import SugestPerfil from './componentes/SugestPerfil'
import emilia from '../Feed/imagens/emilia.jpg'
import Footer from './componentes/Footer'
export default function LadoDireito() {
    return(
        <div className='LadoDireito'>
            <Perfil FotoPerfil={profilepic} NomeUsuario='gb-araujo' NomePerfil='Gabriel Araujo'/>
            <Sugestoes/>
            <SugestPerfil FotoPerfil={emilia} NomeUsuario='emilia123' NomePerfil='Emilia'/>
            <SugestPerfil FotoPerfil={emilia} NomeUsuario='emilia123' NomePerfil='Emilia'/>
            <SugestPerfil FotoPerfil={emilia} NomeUsuario='emilia123' NomePerfil='Emilia'/>
            <SugestPerfil FotoPerfil={emilia} NomeUsuario='emilia123' NomePerfil='Emilia'/>
            <Footer />
        </div>
    )
}