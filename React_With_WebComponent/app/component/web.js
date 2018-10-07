import React from 'react';
import ReactDOM from 'react-dom';

//THis is an web component.
class WebComponent extends HTMLElement {
connectedCallback() {
    console.log('sssss', this.props.name);
    const mountPoint = document.createElement('span');
    this.attachShadow({ mode: 'open' }).appendChild(mountPoint);

    const name = this.getAttribute('name');
    const url = 'https://www.google.com/search?q=' + encodeURIComponent(name);
    ReactDOM.render(<a href={url}>{name}</a>, mountPoint);
  }
}
customElements.define('web-component', WebComponent);