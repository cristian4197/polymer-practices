import { html, PolymerElement } from "@polymer/polymer";
import '../../components/login-form/login-form';

class LoginComponent extends PolymerElement {
  static get template() {
    return html`
      <style>
          .login {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100%;
          font-family: 'Poppins', sans-serif;
        }

      </style>
      <div id="login" class="login">
          <div>
            <h2>Login de Inicio de Sesión</h2>
          </div>
          <login-form-app></login-form-app>
        <div>
      `;
  }

  static get properties() {

  }

  addEventListeners() {
    const container = this.shadowRoot.querySelector("#login");
    // Escuchar el evento 'login' emitido por el login-form-component
    container.addEventListener('login', (event) => {
      const { user, password } = event.detail;
      console.log('Usuario:', user);
      console.log('Contraseña:', password);
      
      // Aquí puedes manejar los datos (por ejemplo, hacer un login, validación, etc.)
    });
  }

  connectedCallback(){
    super.connectedCallback();
    this.addEventListeners();
  }

}

window.customElements.define('login-app', LoginComponent);