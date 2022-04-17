// Create a class for the element
class Book extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const title    = this.getAttribute('title');
        const subtitle = this.getAttribute('subtitle');
        const author   = this.getAttribute('author');
        const description = this.getAttribute('description');
        const website = this.getAttribute('website');
        console.log(website);
        this.innerHTML = `
        <div class="card text-center">
        <div class="card-header">${author}</div>
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class="card-text">${description}</p>
          <a href="${website}" class="btn btn-primary">Link</a>
        </div>
        <div class="card-footer">
         ${subtitle}
        </div>
      </div>
        `;  
    }
}

// Define the new element
customElements.define('mit-book', Book);
