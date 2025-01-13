import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';
import '@polymer/polymer/lib/elements/dom-repeat.js';  // Agregar explícitamente dom-repeat


class ToolbarComponent extends PolymerElement {
  static get template() {
    return html`
      <style>
     header {
        background-color: #1D3557;
        padding: 15px;
        color: white;
      }

      nav {
        width: 100%;
        display: flex;
        justify-content: center;
      }

      ul {
        list-style: none;
        display: flex;
        justify-content: space-between;
        padding: 0;
        margin: 0;
      }

      li {
        cursor: pointer;
        margin-right: 1rem;
        font-family: 'Poppins', sans-serif;
        font-size: 1.1rem;
        transition: transform 0.3s ease, color 0.3s ease;
      }

      li:hover {
        color: #F1FAEE;
        transform: translateY(-5px);
      }

      li:active {
        transform: translateY(0);
      }

      nav {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px;
      }

      header:hover {
        box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
        transition: box-shadow 0.3s ease-in-out;
      }
      </style>

      <header>
        <nav aria-label="Menú de navegación">
          <ul role="menu">
            <template is="dom-repeat" items="[[menuOptions]]">
              <li role="menuitem" tabindex="0" aria-label="Opción de menú: [[item]]">[[item]]</li>  <!-- Usando [[item]] para el binding correcto -->
            </template>
          </ul>
        </nav>
      </header>
    `;
  }

  static get properties() {
    return {
      menuOptions: {
        type: Array,
        value: () => []  // Inicialización de la propiedad, debe ser un array vacío por defecto
      }
    };
  }

  connectedCallback() {
    super.connectedCallback();
  }
}

window.customElements.define('toolbar-app', ToolbarComponent);
