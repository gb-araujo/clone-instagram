import React, { useState } from 'react';
import { FaAngleRight } from 'react-icons/fa';
import './Stories.css';
import Story from './componentes/Story';
import FotoPerfil from '../Feed/imagens/lelouch.webp';
import FotoPerfil2 from '../Feed/imagens/saitama.jpg';
import FotoPerfil3 from '../Feed/imagens/tanjiro.jpg';
import FotoPerfil4 from '../Feed/imagens/yato.jpg';
import FotoPerfil5 from '../Feed/imagens/emilia.jpg';

function Stories() {
    return (
        <div>
            <div className="Stories">
              <Story imgPerfil={FotoPerfil} nomeDaConta="Lelouch" />
              <Story imgPerfil={FotoPerfil2} nomeDaConta="Saitama" />
              <Story imgPerfil={FotoPerfil3} nomeDaConta="Tanjiro" />
              <Story imgPerfil={FotoPerfil4} nomeDaConta="Yato" />
              <Story imgPerfil={FotoPerfil5} nomeDaConta="Emilia" />
              <Story imgPerfil={FotoPerfil} nomeDaConta="Lelouch" />
              <Story imgPerfil={FotoPerfil2} nomeDaConta="Saitama" />
              <Story imgPerfil={FotoPerfil3} nomeDaConta="Tanjiro"/>
              <div className="ShowMore">
              <FaAngleRight />
            </div>
            </div>
        </div>
        
      );
    }

export default Stories;