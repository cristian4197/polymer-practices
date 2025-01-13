import { html, PolymerElement } from "@polymer/polymer";

class LoginFormComponent extends PolymerElement {
  static get template() {

    return html`
      <style>
        form {
        display: flex;
        flex-direction: column;
        padding: 1rem;
        gap: 1rem;
        border-radius: 8px;
        font-family: 'Poppins', sans-serif;
        width: 450px;
      }
      .form-control {
        display: flex;
        flex-direction: column;
      }
      label {
        font-weight: bold;
      }
      input {
        padding: 0.5rem;
        font-size: 1rem;
        border: 1px solid #ccc;
        border-radius: 4px;
      }
      button {
        height: 48px;
        background-color: rgb(32, 82, 209);
        color: white;
        cursor: pointer;
        border-radius: 8px;
        border: none;
        font-size: 16px;
        font-weight: bold;
        width: 100%;
        transition: background-color 0.3s ease, transform 0.2s ease;
      }

      button:hover {
        background-color: rgb(25, 64, 159);
      }

      button:active {
        transform: scale(0.98);
      }

      button:focus {
        outline: 2px solid #0066cc;
        outline-offset: 2px;
      }
      .error-message {
        color: red;
        font-size: 0.875rem;
        display: none;
        margin-top: 0.5rem;
      }
      </style>

      <form id="loginForm">
        <div class="form-control">
          <label for="user">Usuario:</label>
          <input id="user" type="text" placeholder="ingrese usuario" required>
        </div>
        <div class="form-control">
          <label for="password">Contraseña:</label>
          <input id="password" type="password" required>
        </div>
        <button type="submit" aria-label="Iniciar sesión">Iniciar sesión</button>
        <div class="error-message" role="alert" aria-live="assertive"></div>
      </form>
    
    `;

  }

  static get properties() {
    return {

    };
  }

  addEventListeners() {
    const container = this.shadowRoot.querySelector("#loginForm");
    container.addEventListener('submit', (event) => {
      event.preventDefault();
      const user = this.shadowRoot.querySelector('#user').value;
      const password = this.shadowRoot.querySelector('#password').value;

      // Mostrar mensaje de error si los campos están vacíos
      const errorMessage = this.shadowRoot.querySelector('.error-message');
      if (user != 'cris' || password !='123') {
        errorMessage.textContent = 'Por favor, ingresa credenciales correctas';
        errorMessage.style.display = 'block';
        return;
      }

      errorMessage.style.display = 'none';

      const loginEvent = new CustomEvent('login', {
        detail: { user, password },
        bubbles: true,
        composed: true,
      });

      this.dispatchEvent(loginEvent);
    });
  }

  connectedCallback(){
    super.connectedCallback();
    this.addEventListeners();
  }
}

window.customElements.define('login-form-app', LoginFormComponent);