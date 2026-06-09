import Handlebars from "handlebars";

const template = Handlebars.compile(`
<img src="{{img}}" />
<h3>{{titre}}</h3>
<p>{{descr}}</p>
<p>{{type}} - {{width}}x{{height}}</p>

<h4 id="cat">Catégorie :</h4>
<h4>Commentaires :</h4>
<ul id="comments"></ul>
`);

export function displayPicture(photo: any): void {

    const container = document.querySelector("#la_photo");
    if (!container) return;

    container.innerHTML = template({
        img:
            "https://webetu.iutnc.univ-lorraine.fr" +
            photo.photo.url.href,
        titre: photo.photo.titre,
        descr: photo.photo.descr,
        type: photo.photo.type,
        width: photo.photo.width,
        height: photo.photo.height
    });
}

export function displayCategory(cat: any): void {

    const el = document.querySelector("#cat");
    if (!el) return;

    el.textContent = `Catégorie : ${cat.categorie.nom}`;
}

export function displayComments(data: any): void {

    const ul = document.querySelector("#comments");
    if (!ul) return;

    ul.innerHTML = "";

    (data.comments || []).forEach((c: any) => {

        const li = document.createElement("li");
        li.textContent = `${c.pseudo} : ${c.content}`;
        ul.appendChild(li);
    });
}