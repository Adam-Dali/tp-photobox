import { API } from "./config";
import { loadResource } from "./lib/photoloader";

let current: any = null;

function save(data: any) {
    current = data;
    return data;
}

export function load() {
    return loadResource(`${API}/photos`).then(save);
}

function follow(link?: string) {
    if (!link) return Promise.resolve(null);

    return loadResource(
        "https://webetu.iutnc.univ-lorraine.fr" + link
    ).then(save);
}

export const next = () => follow(current?.links?.next?.href);
export const prev = () => follow(current?.links?.prev?.href);
export const first = () => follow(current?.links?.first?.href);
export const last = () => follow(current?.links?.last?.href);