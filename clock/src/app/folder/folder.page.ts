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
  cat: Cats ;

  constructor(
    private activatedRoute: ActivatedRoute,
    private requestsService: RequestsService,
    ) { }

  ngOnInit() {

    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    this.getCat();

  }
  getCat() {
    this.requestsService.getCatImg()
      .subscribe((data:Cats ) => this.cat =
      { 
        // var value = data.charAt(9);
        // var i = value.charAt(0);
        // let test = value.split(",")
        ...data
        // console.log(i);

        
      })
  }
  pressButton(){
    console.log(this.cat.value);
    
  }
}
