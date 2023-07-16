import { Component } from '@angular/core';
import { modelCurrency } from './model';
import { ApishootService } from './apishoot.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'train-Angular';
  acceptApi : modelCurrency | undefined;

  constructor(private apishootService:ApishootService){
    
  }

  ngOnInit(): void {this.data()}

  data(){
    this.apishootService.Currency().subscribe((kuy)=>{
      this.acceptApi=kuy;
      console.log(this.acceptApi);
    })
  }

  customSearchFn(term: string, item: any): boolean {
    term = term.toLowerCase();
    return item.key.toLowerCase().includes(term) || item.value.toLowerCase().includes(term);
  }
}
