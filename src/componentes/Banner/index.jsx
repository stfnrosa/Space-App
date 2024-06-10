import styled from 'styled-components'

const FigureEstilizado = styled.figure`
    background-image: ${props => `url(${props.$backgroundImage})`};
    flex-grow: 1;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    background-size:cover;
    min-height: 328px;
    margin: 0;
    max-width: 100%;
    border-radius: 20px;
`


const TextoBanner = styled.h1`
    color: #fff;
    font-size: 40px;
    font-weight: 400;
    line-height: 48px;
    max-width: 300px;
    padding: 0 64px;
`
    

const Banner = ({texto, backgroundImage}) => {

    return(
        <FigureEstilizado  $backgroundImage={backgroundImage}>
            <TextoBanner>{texto}</TextoBanner>
        </FigureEstilizado>
    )
}

export default Banner