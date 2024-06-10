import styled from "styled-components"
import search from "/imagens/search.png"

const ContainerEstilizado = styled.div`
    position: relative;
    display:inline-block;
`

const InputEstilizado = styled.input`
    background: transparent;
    width: 566px;
    padding: 12px 16px;
    border: 2px solid rgb(201,140,241);
    border-radius: 10px;
    font-size: 20px;
    font-weight: 400;
    line-height:20px;
    color: #d9d9d9;
    box-sizing: border-box;
`

const IconeLupa = styled.img`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 32px;
    height: 32px;
`

const CampoTexto = (props) => {
    return(
       <ContainerEstilizado>
            <InputEstilizado {...props} placeholder="O que você procura?"/>
            <IconeLupa src= {search} alt="ícone lupa"/>
       </ContainerEstilizado>        
    
    )
}

export default CampoTexto