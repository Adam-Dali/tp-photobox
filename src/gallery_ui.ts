export function displayGallery(gallery: any): void {

    const container = document.querySelector("#gallery");
    if (!container) return;

    container.innerHTML = "";

    // 🔥 ULTRA ROBUSTE : l’API peut changer de clé
    const photos =
        gallery.photos ||
        gallery.items ||
        gallery.collection ||
        [];

    photos.forEach((photo: any) => {

        const div = document.createElement("div");
        div.className = "thumb";

        div.dataset.photoId = photo.id;

        // 🔥 fallback image
        const href =
            photo.thumbnail?.href ||
            photo.url?.href ||
            null;

        if (!href) return;

        div.innerHTML = `
            <img src="https://webetu.iutnc.univ-lorraine.fr${href}">
        `;

        container.appendChild(div);
    });
}