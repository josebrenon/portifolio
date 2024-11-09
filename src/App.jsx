import logoHtml from "./img/techs/html-logo.png";
import logoCss from "./img/techs/css-logo.png";
import bootstrapLogo from "./img/techs/bootstrap-logo.png";
import reactLogo from "./img/techs/react-logo.png";
import jsLogo from "./img/techs/js-logo.png";
import pythonLogo from "./img/techs/python-logo.png";
import javaLogo from "./img/techs/java-logo.png";
import cLogo from "./img/techs/c-logo.png";
import analisanum from "./img/projetos/analisanum.png";
// import clonepinterest from "./img/projetos/clonepinterest.png";
import devconverter from "./img/projetos/devconverter.png";
// import horadodia from "./img/projetos/horadodia.png";
import listadetarefasreact from "./img/projetos/listadetarefasreact.png";
import projetoandroid from "./img/projetos/projetoandroid.png";
import reactkanban from "./img/projetos/reactkanban.png";
import verifidade from "./img/projetos/verifidade.png";
import iconGithub from "./img/icons/icone-github.png";
import iconInstagram from "./img/icons/icone-instagram.png";
import iconLinledin from "./img/icons/icone-linkedin.png";

export default function App() {
  return (
    <>
      <header>
        <h1>Dev José Brenon</h1>
        <nav>
          <a
            href="http://github.com/josebrenon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={iconGithub} alt="Icone GitHub" />
          </a>
          <a
            href="https://www.linkedin.com/in/jos%C3%A9-brenon-guilherme-913912169/"
            target="_blank"
          >
            <img src={iconLinledin} alt="Icone Linkedin" />
          </a>
          <a href="https://www.instagram.com/eibrenon/" target="_blank">
            <img src={iconInstagram} alt="Icone instagram" />
          </a>
        </nav>
      </header>

      <main>
        <section className="main-content">
          <article className="text">
            <h2>🙋🏻 Sobre mim</h2>
            <p>
              Olá, me chamo José Brenon, tenho 22 anos e sou de Mairiporã, São
              Paulo, Brasil. Sou apaixonado por desenvolvimento de softwares,
              estudo programação a pouco mais de um ano, sei um pouco de Python,
              Java, C, HTML, CSS, JavaScript, Bootstrap e estou começando com
              React.
            </p>
          </article>

          <aside className="techs">
            <h2>🧑🏻‍💻 Tecnologias</h2>

            <div className="cards-conteiner">
              <div className="card">
                <img src={logoHtml} alt="Logo do HTML5" />
              </div>
              <div className="card">
                <img src={logoCss} alt="Logo das CSS3" />
              </div>
              <div className="card">
                <img src={jsLogo} alt="Logo do JavaScript" />
              </div>
              <div className="card">
                <img src={reactLogo} alt="Logo do React" />
              </div>
              {/* <!-- Quebra de linha aqui --> */}
            </div>
          </aside>

          <aside className="techs">
            <div className="cards-conteiner">
              <div className="card">
                <img src={bootstrapLogo} alt="Logo do Bootstrap" />
              </div>
              <div className="card">
                <img src={pythonLogo} alt="Logo do Python" />
              </div>
              <div className="card">
                <img src={javaLogo} alt="Logo do Java" />
              </div>
              <div className="card">
                <img src={cLogo} alt="Logo do C" />
              </div>
            </div>
          </aside>
          <aside className="projetos-conteiner">
            <h2>🧑🏻‍🔬 Projetos</h2>

            <div className="projeto-div">
              <a
                href="https://josebrenon.github.io/devConverter/"
                target="_blank"
              >
                <img
                  className="imgprojeto"
                  src={devconverter}
                  alt="Projeto DevConverter"
                />
              </a>

              <a
                href="https://josebrenon.github.io/verificador-idade/"
                target="_blank"
              >
                <img
                  className="imgprojeto"
                  src={verifidade}
                  alt="Projeto Verificador de idade"
                />
              </a>

              <a
                href="https://josebrenon-listadetarefas.netlify.app/"
                target="_blank"
              >
                <img
                  className="imgprojeto"
                  src={listadetarefasreact}
                  alt="Projeto Lista de tarefas com React"
                />
              </a>

              <a
                href="https://josebrenon.github.io/projeto-android/"
                target="_blank"
              >
                <img
                  className="imgprojeto"
                  src={projetoandroid}
                  alt="Projeto Android"
                />
              </a>

              <a
                href="https://josebrenon.github.io/analisadordenumeros/"
                target="_blank"
              >
                <img
                  className="imgprojeto"
                  src={analisanum}
                  alt="Projeto analisador de números"
                />
              </a>

              <a
                href="https://josebrenon-reactkanban.netlify.app/"
                target="_blank"
              >
                <img
                  className="imgprojeto"
                  src={reactkanban}
                  alt="Projeto React Kanban"
                />
              </a>
            </div>
          </aside>
        </section>
        <figure>
          <img
            src="https://github.com/josebrenon.png"
            alt="Imagem de José Brenon"
          />
        </figure>
      </main>

      <footer>
        <span>
          &copy; José Brenon Guilherme, 2024 - Todos os direitos reservados
        </span>
      </footer>
    </>
  );
}
