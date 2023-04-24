export default function Perfil(props){
    return(
        <div className="PerfilDireito">
            <div className="FotoPerfil">
                <img alt="" src={props.FotoPerfil} />
            </div>
                <div className="UserID">
    
                    <div className="User">
                        <span>{props.NomeUsuario}</span>
                    </div>
                   <div className="button">
                   </div>
                    <div className="NomePerfil">
                        <span>{props.NomePerfil}</span>
                    </div>
                </div>
                <p className="button">Mudar</p>


        </div>
    )
}