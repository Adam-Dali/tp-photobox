import { loadPicture, loadResource } from "./lib/photoloader";
import { displayPicture, displayCategory, displayComments } from "./ui";

function getPicture(id: string | number) {

    loadPicture(id)
        .then(photo => {

            displayPicture(photo);

            return Promise.all([
                loadResource(
                    "https://webetu.iutnc.univ-lorraine.fr" +
                    photo.links.categorie.href
                ).then(displayCategory),

                loadResource(
                    "https://webetu.iutnc.univ-lorraine.fr" +
                    photo.links.comments.href
                ).then(displayComments)
            ]);
        })
        .catch(console.error);
}

const id =
    window.location.hash
        ? window.location.hash.substring(1)
        : 105;

getPicture(id);