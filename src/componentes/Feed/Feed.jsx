import './Feed.css';
import akita from './imagens/akitaonrails.jpg'
import BalleriniPerfil from './imagens/ballerinipfp.jpeg'
import Ballerini from './imagens/ballerinipost.jpeg'
import GuanabaraPerfil from './imagens/guanabaraperfil.jpg'
import Guanabara from './imagens/guanabarapost.jpg'
import Deschamps from './imagens/DeschampsPost.jpeg'
import DeschampsPerfil from './imagens/DeschampsPerfil.jpg'
import Attekita from './imagens/Attekita_dev.jpeg'
import AttekitaPerfil from './imagens/attekita_profile.jpg'


import Post from './componentes/Post/Post'

export default function Feed() {
    return (
        <div className="Feed">
            <Post 
            nomePerfil="Akita" 
            imagemPost={akita}
            imagemPerfil={akita}
            />
            <Post 
            nomePerfil='Ballerini' 
            imagemPost={Ballerini}
            imagemPerfil={BalleriniPerfil}
            />
            <Post 
            nomePerfil='Guanabara' 
            imagemPost={Guanabara}
            imagemPerfil={GuanabaraPerfil}
            />
                        <Post 
            nomePerfil='Deschamps' 
            imagemPost={Deschamps}
            imagemPerfil={DeschampsPerfil}
            />
                        <Post 
            nomePerfil='Attekita' 
            imagemPost={Attekita}
            imagemPerfil={AttekitaPerfil}
            />
        </div>
    )
}