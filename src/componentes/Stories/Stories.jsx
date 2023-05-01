import React, { useState } from 'react';
import { FaAngleRight } from 'react-icons/fa';
import './Stories.css';
import Story from './componentes/Story';
import akita from '../Feed/imagens/akitaonrails.jpg'
import BalleriniPerfil from '../Feed/imagens/ballerinipfp.jpeg'
import GuanabaraPerfil from '../Feed/imagens/guanabaraperfil.jpg'
import DeschampsPerfil from '../Feed/imagens/DeschampsPerfil.jpg'
import AttekitaPerfil from '../Feed/imagens/attekita_profile.jpg'
import devaprender from '../Feed/imagens/devaprender.jpeg'

function Stories() {
    return (
        <div>
            <div className="Stories">
              <Story imgPerfil={akita} nomeDaConta="Akita" />
              <Story imgPerfil={BalleriniPerfil} nomeDaConta="Ballerini" />
              <Story imgPerfil={GuanabaraPerfil} nomeDaConta="Guanabara" />
              <Story imgPerfil={DeschampsPerfil} nomeDaConta="Deschamps" />
              <Story imgPerfil={AttekitaPerfil} nomeDaConta="Attekita" />
              <Story imgPerfil={devaprender} nomeDaConta="DevAprender" />

              <div className="ShowMore">
              <FaAngleRight />
            </div>
            </div>
        </div>
        
      );
    }

export default Stories;