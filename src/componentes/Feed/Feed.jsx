import './Feed.css';
import imgExemplo from './imagens/lelouch.webp'
import imgExemplo2 from './imagens/saitama.jpg'
import imgExemplo3 from './imagens/tanjiro.jpg'
import imgExemplo4 from './imagens/yato.jpg'
import imgExemplo5 from './imagens/emilia.jpg'
import imagemPerfilExemplo01 from './imagens/lelouch.webp'
import imagemPerfilExemplo02 from './imagens/saitama.jpg'
import imagemPerfilExemplo03 from '../Feed/imagens/tanjiro.jpg';
import imagemPerfilExemplo04 from '../Feed/imagens/yato.jpg';
import imagemPerfilExemplo05 from '../Feed/imagens/emilia.jpg';


import Post from './componentes/Post/Post'

export default function Feed() {
    return (
        <div className="Feed">
            <Post 
            nomePerfil="Lelouch" 
            imagemPost={imgExemplo}
            imagemPerfil={imagemPerfilExemplo01}
            />
            <Post 
            nomePerfil='Saitama' 
            imagemPost={imgExemplo2}
            imagemPerfil={imagemPerfilExemplo02}
            />
            <Post 
            nomePerfil='Tanjiro' 
            imagemPost={imgExemplo3}
            imagemPerfil={imagemPerfilExemplo03}
            />
                        <Post 
            nomePerfil='Yato' 
            imagemPost={imgExemplo4}
            imagemPerfil={imagemPerfilExemplo04}
            />
                        <Post 
            nomePerfil='Emilia' 
            imagemPost={imgExemplo5}
            imagemPerfil={imagemPerfilExemplo05}
            />
        </div>
    )
}