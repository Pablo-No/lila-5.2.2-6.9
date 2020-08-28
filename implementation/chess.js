function chessPosition(possitionArray) {
  this.positionArray = possitionArray;
  this.fen.start = "";
  for(y of this.positionArray){
    let c = 0;
    for(x of y){
      if(y==""){
        c++;
      }
      else{
        if(c>0){
          this.fen.start.concat(c.toString()+y);
        }
        else {
          this.fen.start.concat(y);
        }
      }
    }
  }
}
