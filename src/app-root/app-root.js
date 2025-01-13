import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';
import '../components/toolbar/toolbar';  // Asegúrate de que la ruta sea correcta
import '../views/login/login';


class AppRoot extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      
      <!-- Pasando la propiedad menuOptions a toolbar-app -->
      <toolbar-app menu-options="[[menuOptions]]"></toolbar-app>
      <main>
      <!--Login-->
      <login-app></login-app>
      </main>
      
    `;
  }

  static get properties() {
    return {
      menuOptions: {
        type: Array,
        value: () => ["Home", "Misión", "Visión", "Contacto"] // Array de opciones de menú
      }
    };
  }
}

window.customElements.define('app-root', AppRoot);
