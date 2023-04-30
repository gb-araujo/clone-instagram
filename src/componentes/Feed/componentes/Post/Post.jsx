import { useState } from 'react'; // importar useState

import './Post.css';
import { AiOutlineHeart } from 'react-icons/ai';
import { FaRegComment } from 'react-icons/fa';
import { FiSend} from 'react-icons/fi'
import { BsBookmark } from 'react-icons/bs';
import { AiFillHeart } from 'react-icons/ai';
import { BiDotsHorizontalRounded } from 'react-icons/bi';

export default function Post(props) {
  const [likes, setLikes] = useState(0); 

  function HeartColor() {
    var heart = document.querySelector(".iconeP1");
    if (heart.classList.contains("heart-filled")) {
      heart.classList.remove("heart-filled");
      heart.classList.add("heart-outline");
      setLikes(likes - 1);
    } else {
      heart.classList.remove("heart-outline");
      heart.classList.add("heart-filled");
      setLikes(likes + 1);
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
            <span onClick={HeartColor}>
              <AiFillHeart className={`iconeP1 ${likes > 0 ? 'heart-filled' : 'heart-outline'}`} />
              <AiOutlineHeart className='iconeP1' />
            </span>
            <span><FaRegComment className='iconeP' /></span>
            <span><FiSend className='iconeP' /></span>
            <span onClick={HeartColor}><BsBookmark className='separador' /></span>
          </div>
        </div>
      </div>
      <div className='comentarios'>
        <div className="usercoment">
        {likes > 0 && <div className='likes'>{likes} curtida.</div>}
            <p><span>{props.nomePerfil}</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p></div>
        <div className="comentario"><p><span className='comentario1'>Emilia</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.<span ><AiOutlineHeart className='comenticon' /></span></p>
        </div>
      </div>
    </div>
  );
}
