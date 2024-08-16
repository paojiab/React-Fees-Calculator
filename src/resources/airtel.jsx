import Momo from "./momo";


class AirtelTransaction extends Momo {
    constructor(amount,line){
        super(amount, line)
        this.line = line
        this.amount = amount
    }

      agentWithdraw() {
        if (this.amount < 500) {
          return('- Minimum is 500');
        } else if (this.amount <= 2500) {
          const fee = 330;
          return super.agentComputation(fee);
        } else if (this.amount <= 5000) {
          const fee = 440;
          return super.agentComputation(fee);
        } else if (this.amount <= 15000) {
          const fee = 700;
          return super.agentComputation(fee);
        } else if (this.amount <= 30000) {
          const fee = 880;
          return super.agentComputation(fee);
        } else if (this.amount <= 45000) {
          const fee = 1210;
          return super.agentComputation(fee);
        } else if (this.amount <= 60000) {
          const fee = 1500;
          return super.agentComputation(fee);
        } else if (this.amount <= 125000) {
          const fee = 1925;
          return super.agentComputation(fee);
        } else if (this.amount <= 250000) {
          const fee = 3575;
          return super.agentComputation(fee);
        } else if (this.amount <= 500000) {
          const fee = 7000;
          return super.agentComputation(fee);
        } else if (this.amount <= 1000000) {
          const fee = 12500;
          return super.agentComputation(fee);
        } else if (this.amount <= 2000000) {
          const fee = 15000;
          return super.agentComputation(fee);
        }else if (this.amount <= 3000000) {
          const fee = 18000;
          return super.agentComputation(fee);
        } else if (this.amount <= 4000000) {
          const fee = 18000;
          return super.agentComputation(fee);
        } else if (this.amount <= 5000000) {
          const fee = 18000;
          return super.agentComputation(fee);
        } else {
          return('- Maximum is 5,000,000');
        }
      }

      bankTransferCharge() {
        const amount = this.amount
        if (amount < 5000) {
          return('- Minimum is 5,000');
        } else if (amount <= 15000) {
          const fee = 700;
          return super.bankTransferComputation(fee);
        } else if (amount <= 30000) {
          const fee = 880;
         return super.bankTransferComputation(fee);
        } else if (amount <= 45000) {
          const fee = 1210;
          return super.bankTransferComputation(fee);
        } else if (amount <= 60000) {
          const fee = 1500;
          return super.bankTransferComputation(fee);
        } else if (amount <= 125000) {
          const fee = 1500;
          return super.bankTransferComputation(fee);
        } else if (amount <= 250000) {
          const fee = 2250;
          return super.bankTransferComputation(fee);
        } else if (amount <= 500000) {
          const fee = 4100;
          return super.bankTransferComputation(fee);
        } else if (amount <= 1000000) {
          const fee = 6150;
          return super.bankTransferComputation(fee);
        } else if (amount <= 2000000) {
          const fee = 9250;
          return super.bankTransferComputation(fee);
        }else if (amount <= 3000000) {
          const fee = 11300;
          return super.bankTransferComputation(fee);
        } else if (amount <= 4000000) {
          const fee = 11300;
          return super.bankTransferComputation(fee);
        } else if (amount <= 5000000) {
          const fee = 11300;
          return super.bankTransferComputation(fee);
        } else {
          return('- Maximum is 5,000,000');
        }
      }

}

export default AirtelTransaction