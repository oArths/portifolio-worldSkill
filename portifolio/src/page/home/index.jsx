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
          Art
        </div>
        <div className={style.menu}>
          <a href="#home" className={style.item}>
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
              Projetos de Artístico
            </div>
            <div className={style.portsubtitle}>
            Artístico é um artista renomado na indústria, com destaque em trabalhos de cartoon.
            </div>
          </div>
        </div>

        <div className={style.ContCradProj}>
          <div className={style.ContAllcard}>
            <div className={style.CardProjwoman}>
              <div className={style.cardImage}>
                <img src={ProtCoca} className={style.ProfImag} />
              </div>
              <div className={style.cardText}>
                <div className={style.CardTitle}>
                  Coca-Cola
                </div>
                <div className={style.CardDescri}>
                  Uma parceria com a Coca-Cola para criar ilustrações para um comercial da Copa do Mundo
                  e desenvolver novos designs de botões para brindes.
                </div>
              </div>
            </div>
            <div className={style.CardProjwoman}>
              <div className={style.cardImage}  >
                <img src={woman} className={style.ProfImag} />
              </div>
              <div className={style.cardText}>
                <div className={style.CardTitle}>
                  Outubro Rosa
                </div>
                <div className={style.CardDescri}>
                  Participou de uma campanha do governo brasileiro para conscientização sobre o câncer de mama, criando ilustrações que valorizam a mulher.                </div>
              </div>
            </div>
            <div className={style.CardProjwoman}>
              <div className={style.cardImage}>
                <img src={food} className={style.ProfImag} />
              </div>
              <div className={style.cardText}>
                <div className={style.CardTitle}>
                  Vegan-Food
                </div>
                <div className={style.CardDescri}>
                  Artístico foi o principal designer da Vegan-Food, uma nova rede de fast-food totalmente vegana, responsável por criar a identidade visual da marca desde o início                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
      <div id="sobre" className={style.Sobre}>
        <div className={style.SobretextCoatiner}>
          <div className={style.TextSobreCopnatiner}>
            <div className={style.SobreTitle}>
              Artístico
            </div>
            <div className={style.SobreSubtitle}>
              Artístico é um ilustrador talentoso com um portfólio diversificado com trabalhos editoriais e publicitários
              mais sofisticados.
              Com um estilo único e versátil, ele utiliza diversas técnicas, como aquarela e ilustração digital,
              para criar obras de arte que encantam e inspiram.
            </div>
          </div>
        </div>
        <div className={style.requestConatiner}>
          <div className={style.InputConatiner}>
            <div className={style.cardinput}>
              <div className={style.infoSobre}>
                Tire suas Duvidas

              </div>
              <input className={style.inputSobre} type="text" placeholder="Nome" />
              <textarea className={style.TextArea} placeholder="Asssunto" maxLength={600} resize="none" rows="10"></textarea>
              <div className={style.ConainerSobreButton}>
                <div className={style.Sobrebutton}>
                  Enviar

                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className={style.footCont}>
        <div className={style.textfoof}>
        Todos os direitos reservados © Artístico

        </div>
      </div>

    </div>
  );
}


