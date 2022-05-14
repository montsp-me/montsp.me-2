import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public notif = [
    {
      title: '記事変更',
      content: 'GMT+2の5時頃には変更がほとんど毎日あります。',
      url: 'articlelist',
    },
    {
      title: '記事募集中！',
      content: '詳しくは、記事募集欄へ',
      url: 'articlemail',
    },
  ]

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

}
