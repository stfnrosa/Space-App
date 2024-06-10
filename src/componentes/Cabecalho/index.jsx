import styled from "styled-components"
import CampoTexto from "../CampoTexto"

const HeaderEstilizado = styled.header`
    padding: 60px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
        max-width: 212px;
    }
`

const Cabecalho = () => {
    return (
        <HeaderEstilizado>
            <img src='/imagens/logo.png' alt="logo SpaceApp"/>
            <CampoTexto/>
        </HeaderEstilizado>
    )
}

export default Cabecalho