import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {ImageModel} from '../home/image.model';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {

    imageId = null;
    detailImage: ImageModel;

    constructor(private activatedRoute: ActivatedRoute,
                private http: HttpClient) {
    }

    ngOnInit() {
        this.imageId = this.activatedRoute.snapshot.paramMap.get('id');
        this.loadImageDetail();
    }

    loadImageDetail() {
        this.http.get(`https://picsum.photos/id/${this.imageId}/info`).subscribe(
            (res: ImageModel) => {
                this.detailImage = res;
            },
            error => {
            }
        );
    }

}
