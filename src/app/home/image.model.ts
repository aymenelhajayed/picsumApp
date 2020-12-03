export interface ImageModel {
    id: string;
    author: string;
    width: number;
    height: number;
    url: string;
    download_url: string;
}

export class ClassImage implements ImageModel {
    constructor(
        public id: string,
        public author: string,
        public width: number,
        public height: number,
        public url: string,
        public download_url: string
    ) {}
}
