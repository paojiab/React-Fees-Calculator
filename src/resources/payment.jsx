let formatter = new Intl.NumberFormat("en-US");

class PaymentProvider{
    constructor(
        amount,line
    ){
        this.amount = amount
        this.line = line
    }
  //   start deposit charge
     depositCharge() {
      const title = " payment";
    if (this.amount < 500) {
      return '- Minimum is 500';
    } else if (this.amount <= 2500) {
      const fee = this.line==='mtn' ? 110 : 120;
      return this.depositComputation(fee,title);
    } else if (this.amount <= 5000) {
      const fee = 150;
      return this.depositComputation(fee,title);
    } else if (this.amount <= 15000) {
      const fee = 550;
      return this.depositComputation(fee,title);
    } else if (this.amount <= 30000) {
      const fee = 650;
      return this.depositComputation(fee,title);
    } else if (this.amount <= 45000) {
      const fee = 750;
      return this.depositComputation(fee,title);
    } else if (this.amount <= 60000) {
      const fee = 850;
      return this.depositComputation(fee,title);
    } else if (this.amount <= 125000) {
      const fee = 950;
      return this.depositComputation(fee,title);
    } else if (this.amount <= 250000) {
      const fee = 1050;
      return this.depositComputation(fee,title);
    } else if (this.amount <= 500000) {
      const fee = 1300;
      return this.depositComputation(fee,title);
    } else if (this.amount <= 1000000) {
      const fee = 3350;
      return this.depositComputation(fee,title);
    } else if (this.amount <= 2000000) {
      const fee = 5750;
      return this.depositComputation(fee,title);
    } else if (this.amount <= 4000000) {
      const fee = 5750;
      return this.depositComputation(fee,title);
    } else if (this.amount <= 5000000) {
      const fee = 5750;
      return this.depositComputation(fee,title);
    } else {
      return '- Maximum is 5,000,000';
    }
  }
  //   end deposit charge
  //   start deposit computation
    depositComputation(fee, title) {
      const minimum = 500;
    const budget = this.amount - fee;
    const surplus = this.amount + fee;
    const stillMin = budget < minimum ? true : false;
    if (stillMin) {
      return 'This '+title+' will cost you '+formatter.format(fee)+'\n\nAtleast '+formatter.format(surplus)+' balance is needed to complete '+formatter.format(this.amount)+title;
    } else {
      return 'This '+title+' will cost you '+formatter.format(fee)+'\n\nIf cash at hand is '+formatter.format(this.amount)+', initiate '+formatter.format(budget)+title+'\n\nAtleast '+formatter.format(surplus)+' balance is needed to complete '+formatter.format(this.amount)+title;
    }
    
       
  }
  //   end deposit computation
  
  //   start utility payment
 utilityPayment() {
      const title = " bill";
    if (this.amount < 500) {
      return '- Minimum is 500';
    } else if (this.amount <= 2500) {
      const fee = 190;
      return this.depositComputation(fee,title);
    } else if (this.amount <= 5000) {
      const fee = this.line==='mtn' ? 600 : 330;
      return this.depositComputation(fee,title);
    } else if (this.amount <= 15000) {
      const fee = 1000;
      return this.depositComputation(fee,title);
    } else if (this.amount <= 30000) {
      const fee = 1600;
      return this.depositComputation(fee,title);
    } else if (this.amount <= 45000) {
      const fee = this.line==='mtn' ? 2100 : 2000;
      return this.depositComputation(fee,title);
    } else if (this.amount <= 60000) {
      const fee = this.line==='mtn' ? 2800 : 2650;
      return this.depositComputation(fee,title);
    } else if (this.amount <= 125000) {
      const fee = this.line==='mtn' ? 3700 : 3500;
      return this.depositComputation(fee,title);
    } else if (this.amount <= 250000) {
      const fee = this.line==='mtn' ? 4150 : 3950;
      return this.depositComputation(fee,title);
    } else if (this.amount <= 500000) {
      const fee = this.line==='mtn' ? 5300 : 5050;
      return this.depositComputation(fee,title);
    } else if (this.amount <= 1000000) {
      const fee = 6300;
      return this.depositComputation(fee,title);
    } else if (this.amount <= 2000000) {
      const fee = 6300;
      return this.depositComputation(fee,title);
    } else if (this.amount <= 4000000) {
      const fee = 6300;
      return this.depositComputation(fee,title);
    } else if (this.amount <= 5000000) {
      const fee = 6300;
      return this.depositComputation(fee,title);
    } else {
      return '- Maximum is 5,000,000';
    }
  }
  //   end utility payment
  }

  export default PaymentProvider