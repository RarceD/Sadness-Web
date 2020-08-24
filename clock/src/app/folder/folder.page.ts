import { RequestsService } from './../services/requests.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cats } from '../interfaces/cats';
@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  catUrl: string;
  d: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private requestsService: RequestsService,
  ) { }

  ngOnInit() {
    this.getCat();
    this.catUrl = "../../../assets/defaultCat.png";
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    this.d =  this.catUrl;

  }
  getCat() {
    this.requestsService.getCatImg()
      .subscribe((data: string) => {
        this.d = data;
      })
  }
  pressButton() {
    this.getCat();
    try {

      let value = JSON.stringify(this.d[0])
      let firstItem = value.split('"url":"');
      let secondItem = firstItem[1].split('","');
      this.catUrl = secondItem[0];
    } catch {}
    // console.log(this.catUrl);
    //{"breeds":[],"id":"6er","url":"https://cdn2.thecatapi.com/images/6er.jpg","width":2592,"height":1936}
  }
}
