import styled from 'styled-components'
import Imagem from '../Galeria/Imagem'
import BotaoIcone from '../BotaoIcone'

const Overlay = styled.div`
    background-color: rgba(0,0,0,0.7);
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;

`

const DialogEstelizado = styled.dialog`
    background-color: transparent;
    width: 1156px;
    border: none;
    position: absolute;
    top: 294px;
    padding: 0;
    border: 0;
    display: flex;
    justify-content: center;
    form {
        button {
            position: relative;
            top: 20px;
            right: 60px;
        }
    }
`


const ModalZoom = ({ foto, aoFechar, aoAlternarFavorito }) => {

    return (
        <>
            {foto && <>
                <Overlay/>
                <DialogEstelizado open={!!foto} onClose={aoFechar}>
                    <Imagem foto={foto} expandida={true} aoAlternarFavorito={aoAlternarFavorito}/>
                    <form method="dialog">
                        <BotaoIcone ormMethod="dialog">
                            <img src='/icones/fechar.png' alt="Icone de fechar"/>
                        </BotaoIcone>
                    </form>
                </DialogEstelizado>
            </>}

        </>
    )
}

export default ModalZoom