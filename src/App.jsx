import "./App.css";

export default function App() {
  return (
    <>
      <div className="container">
        <a className="logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
            alt="logo"
            className="logo-img"
          />
        </a>
        <div className="login">
          <h1 className="login_title">Iniciar Sesión</h1>
          <div className="login_group">
            <input type="text" className="login_input" placeholder="Email" />
            <input
              type="password"
              className="login_input"
              placeholder="Password"
            />
            <button className="login_sing-in">Iniciar Sesión</button>
          </div>
          <div className="login_secondary">
            <a href="#">
              <input type="checkbox" className="checkbox"></input>Recordarme
            </a>
            <a href="#">¿Necitas ayuda?</a>
          </div>
        </div>
      </div>
      <div className="footer-center">
      </div>
        <div className="footery">
          <a href="#" className="footer-question">
            ¿Preguntas? Llama al 0800 345 1593
          </a>
          <div className="footer-links">
            <p href="#">Preguntas frecuentes</p>
            <a href="#">Centro de ayuda</a>
            <a href="#">Términos de uso</a>
          </div>
        </div>
    </>
  );
}
