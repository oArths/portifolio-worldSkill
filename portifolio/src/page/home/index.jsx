import style from "./style.module.css";
import HomeImage from "../../assets/img/image.png"
import ProtCoca from "../../assets/img/coca.png"
import food from "../../assets/img/food.png" 
import woman from "../../assets/img/woman.png" 
export default function Home() {
  return (
    <div className={style.conatiner}>
      <div className={style.Header}>
        <div className={style.logo}>
          logo
        </div>
        <div className={style.menu}>
          <a href="home" className={style.item}>
            Home
          </a>
          <a href="#portifolio" className={style.item}>
            Portifolio
          </a>
          <a href="#sobre" className={style.item}>
            Contato
          </a>
        </div>
      </div>
      <div id="home" className={style.Home}>
        <div className={style.ContainerhomeInfo}>
          <div className={style.text}>
            <div className={style.title}>
              Artístico, Um ilustrador freelancer
            </div>
            <div className={style.subtitle}>
              um artista talentoso com foco em estilos como cartoon, aquarela e ilustração digital
            </div>
            <a href="#portifolio" className={style.Button}>
              <a  >Conhecer</a>
            </a>
          </div>
        </div>
        <div className={style.ContImage}>
          <img src={HomeImage} alt="imagem" className={style.image} />
        </div>
      </div>
      <div id="portifolio" className={style.portifolio}>

        <div className={style.TitlePortifeli}>
          <div className={style.portifileTetx}>
            <div className={style.portTitle}>
              Projetos de Artistico
            </div>
            <div className={style.portsubtitle}>
              Artístico é um artista consolidado na industria tendo partipação em diversas obras se destacando no cartoon

            </div>
          </div>
        </div>

        <div className={style.ContCradProj}>
          <div className={style.ContAllcard}>
            {/* <div className={style.cradalltitle}>
              Projetos
            </div> */}
            <div className={style.CardProj}>
              <div className={style.cardImage}>
                <img src={ProtCoca} className={style.ProfImag} />
              </div>
              <div className={style.cardText}>
                <div className={style.CardTitle}>
                  Parceria com a Coca-Colla
                </div>
                <div className={style.CardDescri}>
                  um parceria memoravel com a cocacola onde el desenvolverl ilustrações pra mesma em seu comercial na copa do mundo
                </div>
              </div>
            </div>
            <div className={style.CardProjwoman}>
              {/* <div className={style.cardText}> */}
                <div className={style.CardTitle}>
                  Parceria com a Coca-Colla
                </div>
              <div className={style.cardImage}>
                <img src={woman} className={style.ProfImag} />
              </div>
                <div className={style.CardDescri}>
                  um parceria memoravel com a cocacola onde el desenvolverl ilustrações pra mesma em seu comercial na copa do mundo
                </div>
              {/* </div> */}
            </div>
            <div className={style.CardProjwoman}>
              <div className={style.cardImage}>
                <img src={food} className={style.ProfImag} />
              </div>
              <div className={style.cardText}>
                <div className={style.CardTitle}>
                  Parceria com a Coca-Colla
                </div>
                <div className={style.CardDescri}>
                  um parceria memoravel com a cocacola onde el desenvolverl ilustrações pra mesma em seu comercial na copa do mundo
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}


