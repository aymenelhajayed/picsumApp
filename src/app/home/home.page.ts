import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ImageModel} from './image.model';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    imagesList: ImageModel[] = [];
    page = 1;
    limit = 10;
    disableInfiniteScroll = false;

    constructor(private http: HttpClient) {
        this.loadImages();
    }

    loadImages(event?) {
        this.http.get(`https://picsum.photos/v2/list?page=${this.page}&limit=${this.limit}`).subscribe(
            (res: ImageModel[]) => {
                this.imagesList = this.imagesList.concat(res);
                if (event) {
                    event.target.complete();
                }
            },
            error => {
            }
        );
    }

    loadMoreImages(event) {
        this.page++;
        this.loadImages(event);
        if (this.disableInfiniteScroll) {
            event.target.disable = true;
        }
    }

}
