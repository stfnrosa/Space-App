import styled from 'styled-components'
import tags from './tags.json'

const TagContainers = styled.div`
    display: flex;
    gap: 64px;
    align-items: center;
    margin-top: 56px;
`

const ParagrafoTags = styled.h3`
    color: #d9d9d9;
    font-size: 24px;
    margin: 0;
    font-weight: 400;
`
const BotaoTags = styled.button`
    background: rgba(217, 217, 217, 0.3);
    color: #fff;
    border-radius: 10px;
    font-size: 24px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    padding: 12px;
    border: none;
    box-sizing: border-box;
    border: 2px solid transparent;
    &:hover {
      border-color: #C98CF1;
    }
`

const Div = styled.div`
    display: flex;
    gap: 24px;
    justify-content: end;
`


const Tags = () => {
    return (
        <TagContainers>
            <ParagrafoTags>Busque por tags:</ParagrafoTags>
            <Div>
                {tags.map(tag => <BotaoTags key={tag.id}>{tag.titulo}</BotaoTags>)}
            </Div>
        </TagContainers>
    )
}

export default Tags