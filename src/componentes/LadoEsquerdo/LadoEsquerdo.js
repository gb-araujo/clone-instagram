import './LadoEsquerdo.css';
import logo from './imagens/logo.png';
import logo2 from './imagens/Instagram_logo.png'
import ItemMenu from './componentes/ItemMenu';
import { GrHomeRounded } from 'react-icons/gr';
import { MdSearch } from 'react-icons/md';
import { RiCompass3Fill } from 'react-icons/ri';
import { MdOutlineSlowMotionVideo } from 'react-icons/md';
import { AiFillMessage } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';

export default function LadoEsquerdo() {
    return (
        <div className='LadoEsquerdo'>
            <div className='logo'>
                <img src={logo}/> <img src={logo2}/>
            </div>
            <ul className='menu-principal'>
                <li className='item-menu'>
                    <ItemMenu icone={<GrHomeRounded />} texto=' Página Inicial' />
                </li>
                <li className='item-menu'>
                    <ItemMenu icone={<MdSearch />} texto=' Pesquisa' />
                </li>
                <li className='item-menu'>
                    <ItemMenu icone={< RiCompass3Fill />} texto=' Explorar' />
                </li>
                <li className='item-menu'>
                    <ItemMenu icone={< MdOutlineSlowMotionVideo />} texto=' Reels' />
                </li>
                <li className='item-menu'>
                    <ItemMenu icone={< AiFillMessage />} texto=' Mensagens' />
                </li>
                <li className='item-menu'>
                    <ItemMenu icone={< AiOutlineHeart />} texto=' Notificações' />
                </li>
                <li className='item-menu'>
                    <ItemMenu icone={< CgProfile />} texto=' Perfil' />
                </li>

            </ul>
        </div>

    )
}