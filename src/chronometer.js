class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;

  }

  start(printTimeCallback) {
     
    // +1 currenTime ++
    // function printTimeCallback

    this.intervalId = setInterval(() => {
      this.currentTime++ ; 
        if(printTimeCallback) return printTimeCallback();

    }  , 1000);
    


    


  }

  getMinutes() {
    return Math.floor(this.currentTime/60);

  }

  getSeconds() {
 
    return this.currentTime % 60;
 
  }

  computeTwoDigitNumber(value) {

   return value >=0 && value < 10 ? "0" + value : "" + value;

    // this works too but I like ternary operators better
    
    //if(value >= 0 && value < 10){
    //   return "0" + value;
    // }

    // else{
    //   return "" + value;
    // }

  }

  stop() {

      return clearInterval(this.intervalId);

  }

  reset() {

    this.currentTime = 0;

  }

  split() {


    //    return console.log(` ${this.computeTwoDigitNumber(this.getMinutes)}:${this.computeTwoDigitNumber(this.getSeconds)}`);

    let val1 = this.computeTwoDigitNumber(this.getMinutes());
    let val2 = this.computeTwoDigitNumber(this.getSeconds());
    let result  = `${val1}:${val2}`;


    return result; 
    

  }


}

