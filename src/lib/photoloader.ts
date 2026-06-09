import { API } from "../config";

export function loadPicture(id: number | string): Promise<any> {

    return fetch(`${API}/photos/${id}`, {
        credentials: "include"
    })
        .then(r => {
            if (!r.ok) throw new Error(`HTTP ${r.status}`);
            return r.json();
        });
}

export function loadResource(uri: string): Promise<any> {

    return fetch(uri, {
        credentials: "include"
    })
        .then(r => {
            if (!r.ok) throw new Error(`HTTP ${r.status}`);
            return r.json();
        });
}