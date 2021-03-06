export default class AppDrawer extends HTMLElement {
  static get observedAttributes() {
    return ["disabled", "open"];
  }

  get disabled() {
    return this.hasAttribute("disabled");
  }

  set disabled(val) {
    if (val) {
      this.setAttribute("disabled", "");
    } else {
      this.removeAttribute("disabled");
    }
  }

  connectedCallback() {
    this.innerHTML = "<b>I'm an x-foo-with-markup!</b>";
  }

  // Only called for the disabled and open attributes due to observedAttributes
  attributeChangedCallback(name, oldValue, newValue) {
    // When the drawer is disabled, update keyboard/screen reader behavior.
    if (this.disabled) {
      this.setAttribute("tabindex", "-1");
      this.setAttribute("aria-disabled", "true");
    } else {
      this.setAttribute("tabindex", "0");
      this.setAttribute("aria-disabled", "false");
    }
    // TODO: also react to the open attribute changing.
  }
}
