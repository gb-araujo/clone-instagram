import './Post.css'
import { AiOutlineHeart } from 'react-icons/ai';
import { FaRegCommentDots } from 'react-icons/fa';
import { MdShare } from 'react-icons/md'
import { BsBookmark } from 'react-icons/bs'
import { BiDotsHorizontalRounded } from 'react-icons/bi'

export default function Post(props) {
    function HeartColor() {
        var heart = document.querySelector(".iconeP1");
        if (heart.style.color === "red") {
            heart.style.color = "black";
        } else {
            heart.style.color = "red";
        }
    }

    return (
        <div className='Post'>
            <div className="BarraSuperior">
                <div className="ImagemPerfilAutor">
                    <img alt="imagem de perfil" src={props.imagemPerfil} />
                </div>

                <div className='nomeBarra'>
                    <div className="NomePerfilAutor">{props.nomePerfil}</div>
                    <div className="MenuBarraSuperior"><span>< BiDotsHorizontalRounded /></span></div>
                </div>
            </div>
            <div className="ConteudoPost">
                <img alt="foto" src={props.imagemPost} />
                <div className='BarraInferior'>
                    <div className='icones'>
                        <span onClick={HeartColor}><AiOutlineHeart className='iconeP1' /></span>
                        <span ><FaRegCommentDots className='iconeP' /></span>
                        <span ><MdShare className='iconeP' /></span>
                        <span onClick={HeartColor}><BsBookmark className='separador' /></span>

                    </div>
                </div>

            </div>
            <div className='comentarios'>
                <div className="usercoment"><p><span>{props.nomePerfil}</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p></div>
                <div className="comentario"><p><span className='comentario1'>Emilia</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.<span ><AiOutlineHeart className='comenticon' /></span></p>
                </div>
            </div>
        </div>

    )
}