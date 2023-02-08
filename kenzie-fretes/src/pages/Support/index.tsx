import Container from "./style";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { AiFillGithub } from "react-icons/ai";
import logo_support from "../../assets/logo_support.svg";
import perfil_christian from "../../assets/perfil_christian.svg";
import perfil_gabriel from "../../assets/perfil_gabriel.svg";
import perfil_raphael from "../../assets/perfil_raphael.svg";
import perfil_vinicius from "../../assets/perfil_vinicius.svg";
import perfil_lucas from "../../assets/perfil_lucas.svg";
import LinkGit from "../../components/LinkGit";
import Footer from "../../components/Footer";
import { useLogin } from "../../context/LoginContext/LoginProvider";

const Support = () => {
  const navigate = useNavigate();

  const { auth } = useLogin();

  const handleLink = () => {
    if (auth) {
      navigate("/dashboard");
    } else {
      navigate("/");
    }
  };

  return (
    <Container>
      <img className="logo_top" src={logo_support} alt="logo-rctlog" />

      <div className="main">
        <button onClick={() => handleLink()}>
          <MdOutlineArrowBackIos /> Voltar
        </button>

        <div className="dev-list">
          <h2>
            <AiFillGithub size={60} /> Desenvolvido por:
          </h2>

          <div className="devs">
            <LinkGit
              src={perfil_christian}
              alt="Christian Gall"
              href="https://github.com/Christ1anGall"
            />

            <LinkGit
              src={perfil_gabriel}
              alt="Gabriel Fray"
              href="https://github.com/GabrielFray"
            />

            <LinkGit
              src={perfil_raphael}
              alt="Raphael Gloria"
              href="https://github.com/rapha021"
            />

            <LinkGit
              src={perfil_vinicius}
              alt="Vinícius Moreira"
              href="https://github.com/vinMoreiraHenrique"
            />

            <LinkGit
              src={perfil_lucas}
              alt="Lucas Silva"
              href="https://github.com/silva-lucas98"
            />
          </div>
        </div>
      </div>
      <Footer logo={logo_support} />
    </Container>
  );
};

export default Support;
