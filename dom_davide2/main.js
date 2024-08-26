// Selezione degli elementi dal DOM
const titleInput = document.querySelector('#title');
const contentInput = document.querySelector('#content');
const createArticleBtn = document.querySelector('#createArticleBtn');
const articlesDiv = document.querySelector('#articles');

// Funzione per creare un articolo
function createArticle() {
    const title = titleInput.value.trim();
    const content = contentInput.value.trim();

    // Controllo se il titolo o il contenuto sono vuoti
    if (title == "" || content == "") {
        alert("Per favore, compila sia il titolo che il paragrafo.");
        return;
    }

    // Crea l'articolo
    const article = document.createElement('article');

    // Creazione dell'elemento titolo
    const articleTitle = document.createElement('h2');
    articleTitle.textContent = title;
    article.appendChild(articleTitle);

    // Creazione dell'elemento paragrafo
    const articleContent = document.createElement('p');
    articleContent.textContent = content;
    article.appendChild(articleContent);

    // Creazione dell'elemento data di pubblicazione
    let date = new Date();
    let formatDate = date.toLocaleDateString();
    const articleDate = document.createElement('small');
    articleDate.textContent = `Pubblicato il: ${formatDate}`;
    article.appendChild(articleDate);

    // Aggiungi l'articolo al div
    articlesDiv.appendChild(article);

    // Pulire gli input
    titleInput.value = "";
    contentInput.value = "";
}

// Aggiungere un event listener al bottone per creare l'articolo
createArticleBtn.addEventListener('click', createArticle);
