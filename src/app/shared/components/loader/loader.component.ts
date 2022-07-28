import { LoaderService } from './../loader.service';
import { Component, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit {
  loading: boolean;
  public sub$: Subscription;

  constructor(private loaderService: LoaderService) {}

  ngOnInit(): void {
    this.sub$ = this.loaderService.loadingControl.subscribe((message) => {
      message !== null && message !== ''
        ? (this.loading = true)
        : (this.loading = false);
    });
  }
}
