export default function SugestPerfil(props){
    return(
        <div className="SugestaoPerfil">
            <div className="FotoPerfil1">
                <img alt="" src={props.FotoPerfil} />
            </div>
                <div className="UserID1">
    
                    <div className="User1">
                        <span>{props.NomeUsuario}</span>
                    </div>
                   <div className="button">
                   </div>
                    <div className="NomePerfil1">
                        <span>Seguido(a) por Yato</span>
                    </div>
                </div>
                <p className="button">Seguir</p>
        </div>
    )
}