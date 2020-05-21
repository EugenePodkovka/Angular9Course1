import { Component, OnInit, Inject, Optional } from '@angular/core';
import { RandomStrLen, LocalStorageService, ConstantsService, csInstance, GeneratorFactory, GeneratorService } from '../core/services';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  providers: [
    { provide: ConstantsService, useValue: csInstance },
    { provide: RandomStrLen, useFactory: GeneratorFactory(5), deps: [GeneratorService] }
  ]
})
export class AboutComponent implements OnInit {
  constantContent: {App: string, Ver: string};

  constructor(
    @Inject(RandomStrLen) public randomStrLen: string,
    @Optional() private localStorageService: LocalStorageService,
    private csIn: ConstantsService
  ) { }

  ngOnInit(): void {
    this.constantContent = this.csIn.getAllData();
  }

  onTestLocalStorageBtnClick() {
    this.localStorageService.setItem('test', {val: 'testStringObj'});
    this.localStorageService.setItem('test1', 111);
    this.localStorageService.setItem('test2', 'testString');

    console.log(this.localStorageService.getItem('test'));
    console.log(this.localStorageService.getItem('test1'));
    console.log(this.localStorageService.getItem('test2'));
  }

}
