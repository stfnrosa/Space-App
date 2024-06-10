

const Imagem = ({ foto }) => {


    return (
      <figure>
        <img src={foto.path} alt={foto.alt} />
        <figcaption>
            <h3>{foto.titulo}</h3>
            <footer>
                <h4>{foto.fonte}</h4>
                <button>
                    <img src="/icones/favorito.png" alt="Icone de favorito" />
                </button>
                <button>
                    <img src="/icones/expandir.png" alt="Icone de expandir" />
                </button>
            </footer>
        </figcaption>
      </figure>  
    )
}

export default Imagem