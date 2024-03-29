import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AccCredential } from '../../Models/AccCredential';
import { Account } from '../../Models/Account';
import { Transaction } from '../../Models/Transaction';
import { AccountService } from '../../services/account.service';
import { AccCredentialService } from '../../services/credential.service';
import { TransactionService } from '../../services/transaction.service';

@Component({
  selector: 'app-user-dash',
  templateUrl: './user-dash.component.html',
  styleUrls: ['./user-dash.component.css']
})
export class UserDashComponent implements OnInit {

  Account? : Account
  Cred? : AccCredential
  data? : Transaction[]
  constructor(private _as : AccountService, private route : Router, private _cs : AccCredentialService, private _Ts : TransactionService ) { }
  
mode : any




  ngOnInit(): void {
   
      
    this._Ts.getAllTransaction().subscribe(
  
      {
       next: (data: Transaction[]) => {this.data = data 
       }
       ,
       error: (errresp: HttpErrorResponse) => {
 
        console.log(errresp);
        
       },
       complete: () => {}
     })
    
    this._as.getAccountbyId().subscribe(
      {next : (Accounts : Account) =>{ this.Account = Accounts;
        console.log(Accounts);
        
        
       }, 
      error : (err) => console.log(err),
      complete : () => {
       
      }
      
      }
    )
    this._cs.getAccountCredbyId().subscribe((AccCredential : AccCredential) => {this.Cred = AccCredential ; console.log(AccCredential);})
     
     }
     
     navigateverify(id : number){
       this.route.navigateByUrl(`user/transaction/verification/${id}`)
     }
  

 
   
}

