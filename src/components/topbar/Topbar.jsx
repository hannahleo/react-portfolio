import "./topbar.scss"
import { Mail, LinkedIn, GitHub, Description } from '@material-ui/icons';

export default function Topbar( {menuOpen, setMenuOpen}) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">hannah.</a>
          <div className="itemContainer">
            <a href="https://www.linkedin.com/in/hannah-leo" target="_blank" rel="noreferrer">
              <LinkedIn className="icon" alt=""/>
              LinkedIn
            </a>
          </div>
          <div className="itemContainer">
            <a href="https://github.com/hannahleo" target="_blank" rel="noreferrer">
              <GitHub className="icon" alt=""/>
              GitHub
            </a>
          </div>
          <div className="itemContainer">
            <a href="mailto:hannah.leo64@gmail.com" target="_blank" rel="noreferrer">
              <Mail className="icon"/>
              Email
            </a>
          </div>
          <div className="itemContainer">
            <a href="assets/CVWebDraft.pdf" download>
              <Description className="icon" alt=""/>
              Résumé
            </a>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
