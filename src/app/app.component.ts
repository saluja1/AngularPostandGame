import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {faTimes} from "@fortawesome/free-solid-svg-icons"
import {faCircle, faHandPointer} from '@fortawesome/free-regular-svg-icons'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myTicTacToe';
  winMsg = "";
  isWinner = false;
  isCross = false;
  itemArray: string[] = new Array(9).fill('empty');
  faTimes = faTimes;
  faCircle = faCircle;
  faHandPointer = faHandPointer;


  constructor(private toastr:ToastrService){}


  handleClick(itemNumber:number){
    if(this.itemArray[itemNumber]==='empty'){
      this.itemArray[itemNumber] = this.isCross ? 'cross' : 'circle';
      this.isCross = !this.isCross
    }
    else{
        return this.toastr.info('Already Filled');
    }
    this.checkIsWinner();
    if(this.isWinner){
        this.toastr.success(this.winMsg);
		setTimeout(this.reloadGame, 3000);
    	return;
    }
  }
  reloadGame = () =>{
    this.isCross = false;
    this.isWinner = false;
	this.winMsg = "";
    this.itemArray = new Array(9).fill('empty');
  };

  checkIsWinner = () => {
    if (
      this.itemArray[0] === this.itemArray[1] &&
      this.itemArray[0] === this.itemArray[2] &&
      this.itemArray[0] !== 'empty'
    ) {
      this.winMsg = `${this.itemArray[0]} won`;
      this.isWinner = true;
    } else if (
      this.itemArray[3] !== 'empty' &&
      this.itemArray[3] === this.itemArray[4] &&
      this.itemArray[4] === this.itemArray[5]
    ) {
      this.winMsg = `${this.itemArray[3]} won`;
      this.isWinner = true;
    } else if (
      this.itemArray[6] !== 'empty' &&
      this.itemArray[6] === this.itemArray[7] &&
      this.itemArray[7] === this.itemArray[8]
    ) {
      this.winMsg = `${this.itemArray[6]} won`;
      this.isWinner = true;
    } else if (
      this.itemArray[0] !== 'empty' &&
      this.itemArray[0] === this.itemArray[3] &&
      this.itemArray[3] === this.itemArray[6]
    ) {
      this.winMsg = `${this.itemArray[0]} won`;
      this.isWinner = true;
    } else if (
      this.itemArray[1] !== 'empty' &&
      this.itemArray[1] === this.itemArray[4] &&
      this.itemArray[4] === this.itemArray[7]
    ) {
      this.winMsg = `${this.itemArray[1]} won`;
      this.isWinner = true;
    } else if (
      this.itemArray[2] !== 'empty' &&
      this.itemArray[2] === this.itemArray[5] &&
      this.itemArray[5] === this.itemArray[8]
    ) {
      this.winMsg = `${this.itemArray[2]} won`;
      this.isWinner = true;
    } else if (
      this.itemArray[0] !== 'empty' &&
      this.itemArray[0] === this.itemArray[4] &&
      this.itemArray[4] === this.itemArray[8]
    ) {
      this.winMsg = `${this.itemArray[0]} won`;
      this.isWinner = true;
    } else if (
      this.itemArray[2] !== 'empty' &&
      this.itemArray[2] === this.itemArray[4] &&
      this.itemArray[4] === this.itemArray[6]
    ) {
      this.winMsg = `${this.itemArray[2]} won`;
      this.isWinner = true;
    }

  }

}
