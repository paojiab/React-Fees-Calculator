let formatter = new Intl.NumberFormat("en-US");

class Momo {

constructor (amount,line){
    this.line = line;
    this.amount = amount;
}

agentComputation(fee) {
    const tax = Math.round(this.amount * 0.005)
    const charge = Math.round(tax + fee) 
    const total = Math.round(this.amount + fee + tax) 
    const budget = Math.round(this.amount - charge) 
    const minimum = 500;
    const maximum = 5000000;
    const stillMin = budget < minimum ? true : false;
    const nowMax = total >= maximum ? true :false;
    const sendStatement = this.line == 'mtn' ? this.mtnSendCharge() : this.airtelSendCharge();
    if (stillMin) {
          return('Agent withdraw fee is ' + formatter.format(fee) + ' & tax is '+ formatter.format(tax) +', a sum of '+formatter.format(charge)+'\n\nSend a total of '+formatter.format(total)+' for recepient to exactly withdraw '+formatter.format(this.amount)+ sendStatement);

    } else if (nowMax){
      return('Agent withdraw fee is '+formatter.format(fee)+' & tax is '+formatter.format(tax)+', a sum of '+formatter.format(charge)+'\n\nIf cash at hand is '+formatter.format(this.amount)+', initate '+formatter.format(budget)+' withdraw\n\nSending is '+sendStatement);
    } else {
          return('Agent withdraw fee is '+formatter.format(fee)+' & tax is '+formatter.format(tax)+', a sum of '+formatter.format(charge)+'\n\nIf cash at hand is '+formatter.format(this.amount)+', initate '+formatter.format(budget)+' withdraw\n\nSend a total of '+formatter.format(total) +sendStatement+' for recepient to exactly withdraw '+formatter.format(this.amount));

    }
  }

  sendComputation(fee) {
    return(' at a fee of '+fee);
  }

  
   mtnSendCharge() {
    if (this.amount < 500) {
      return('- Minimum is 500');
    } else if (this.amount <= 5000) {
      const fee = 100;
      return this.sendComputation(fee);
    } else if (this.amount <= 60000) {
      const fee = 500;
      return this.sendComputation(fee);
    } else if (this.amount <= 500000) {
      const fee = 1000;
      return this.sendComputation(fee);
    } else if (this.amount <= 1000000) {
      const fee = 1500;
      return this.sendComputation(fee);
    } else if (this.amount <= 5000000) {
      const fee = 2000;
      return this.sendComputation(fee);
    } else {
      return('- Maximum is 5,000,000');
    }
  }

  airtelSendCharge() {
    if (this.amount < 500) {
      return('- Minimum is 500');
    } else if (this.amount <= 5000) {
      const fee = 100;
      return this.sendComputation(fee);
    } else if (this.amount <= 60000) {
      const fee = 500;
      return this.sendComputation(fee);
    } else if (this.amount <= 500000) {
      const fee = 1000;
      return this.sendComputation(fee);
    } else if (this.amount <= 1000000) {
      const fee = 1500;
      return this.sendComputation(fee);
    } else if (this.amount <= 2000000) {
      const fee = 2000;
      return this.sendComputation(fee);
    } else if (this.amount <= 5000000) {
      const fee = 2000;
      return this.sendComputation(fee);
    } else {
      return('- Maximum is 5,000,000');
    }
  }

  bankTransferComputation(fee) {
    const amount = this.amount
    const minimum = 5000;
  const budget = amount - fee;
  const surplus = amount + fee;
  const stillMin = budget < minimum ? true : false;
  if (stillMin) {
    return('Bank deposit transfer will cost you '+formatter.format(fee)+'\n\nAtleast '+formatter.format(surplus)+' balance is needed to exactly initiate '+formatter.format(amount)+' transfer');
  } else {
    return('Bank deposit transfer will cost you '+formatter.format(fee)+'\n\nIf cash at hand is '+formatter.format(amount)+', initiate '+formatter.format(budget)+' transfer\n\nAtleast '+formatter.format(surplus)+' balance is needed to exactly initiate '+formatter.format(amount)+' transfer');
  }
  
}

}

export default Momo