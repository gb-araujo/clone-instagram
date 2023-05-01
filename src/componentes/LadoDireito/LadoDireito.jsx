import './LadoDireito.css'
import Perfil from './componentes/Perfil'
import profilepic from'../Feed/imagens/pfp.jpg'
import Sugestoes from './componentes/Sugestoes'
import SugestPerfil from './componentes/SugestPerfil'
import emilia from '../Feed/imagens/Attekita_dev.jpeg'
import gabaugusto from '../Feed/imagens/gabaugusto.jpg'
import iasmin from '../Feed/imagens/iasmin.jpg'
import jubs from '../Feed/imagens/jubs.jpg'
import mara from '../Feed/imagens/mara.jpg'


import Footer from './componentes/Footer'


export default function LadoDireito() {
    return(
        <div className='LadoDireito'>
            <Perfil FotoPerfil={profilepic} NomeUsuario='Gabriel Araujo'/>
            <Sugestoes/>
            <SugestPerfil FotoPerfil={gabaugusto} NomeUsuario='GabAugusto'/>
            <SugestPerfil FotoPerfil={mara} NomeUsuario='Mara' />
            <SugestPerfil FotoPerfil={iasmin} NomeUsuario='Iasmin'/>
            <SugestPerfil FotoPerfil={jubs} NomeUsuario='Jubileu' />
            <Footer />
        </div>
    )
}