import styled from 'styled-components'
import Imagem from '../Galeria/Imagem'

const Overlay = styled.div`
    background-color: rgba(0,0,0,0.7);
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;

`

const ModalZoom = ({ foto }) => {
    return(
        <>
            {foto && <dialog open={!!foto}>
                <Imagem foto={foto} expandida={true}/>
                    <form method="dialog">
                        <button>OK</button>
                    </form>
            </dialog>}
        </>
    )
}

export default ModalZoom