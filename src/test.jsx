class Momo {
     agentComputation(amount, fee, line) {
        const tax = amount * 0.005;
        const charge = tax + fee;
        const total = amount + fee + tax;
        const budget = amount - charge;
        const minimum = 500;
        const maximum = 5000000;
        const stillMin = budget < minimum ? true : false;
        const nowMax = total >= maximum ? true :false;
        const sendStatement = line == Network.mtn ? mtnSendCharge(amount) : airtelSendCharge(amount);
        if (stillMin) {
              return('Agent withdraw fee is ' + fee + ' & tax is '+ tax +', a sum of '+charge+'\n\nSend a total of '+total+' for recepient to exactly withdraw '+amount+ sendStatement);
    
        } else if (nowMax){
          return('Agent withdraw fee is '+fee+' & tax is '+tax+', a sum of '+charge+'\n\nIf cash at hand is '+amount+', initate '+budget+' withdraw\n\nSending is '+sendStatement);
        } else {
              return('Agent withdraw fee is '+fee+' & tax is '+tax+', a sum of '+charge+'\n\nIf cash at hand is '+amount+', initate '+budget+' withdraw\n\nSend a total of '+total +sendStatement+' for recepient to exactly withdraw '+amount);
    
        }
      }

      sendComputation(fee) {
        return(' at a fee of '+fee);
      }

      mtnSendCharge(amount) {
        if (amount < 500) {
          return('- Minimum is 500');
        } else if (amount <= 5000) {
          const fee = 100;
          return sendComputation(fee);
        } else if (amount <= 60000) {
          const fee = 500;
          return sendComputation(fee);
        } else if (amount <= 500000) {
          const fee = 1000;
          return sendComputation(fee);
        } else if (amount <= 1000000) {
          const fee = 1500;
          return sendComputation(fee);
        } else if (amount <= 5000000) {
          const fee = 2000;
          return sendComputation(fee);
        } else {
          return('- Maximum is 5,000,000');
        }
      }

      airtelSendCharge(amount) {
        if (amount < 500) {
          return('- Minimum is 500');
        } else if (amount <= 5000) {
          const fee = 100;
          return sendComputation(fee);
        } else if (amount <= 60000) {
          const fee = 500;
          return sendComputation(fee);
        } else if (amount <= 500000) {
          const fee = 1000;
          return sendComputation(fee);
        } else if (amount <= 1000000) {
          const fee = 1500;
          return sendComputation(fee);
        } else if (amount <= 2000000) {
          const fee = 2000;
          return sendComputation(fee);
        } else if (amount <= 5000000) {
          const fee = 2000;
          return sendComputation(fee);
        } else {
          return('- Maximum is 5,000,000');
        }
      }
}

const Network = Object.freeze({
    mtn: Symbol('mtn'),
    airtel: Symbol('airtel')
  })

class MTN {
   static line = Network.mtn

    agentWithdraw(amount) {
        if (amount < 500) {
          return('- Minimum is 500');
        } else if (amount <= 2500) {
          const fee = 330;
          return agentComputation(amount, fee, line);
        } else if (amount <= 5000) {
          const fee = 440;
          return agentComputation(amount, fee, line);
        } else if (amount <= 15000) {
          const fee = 700;
          return agentComputation(amount, fee, line);
        } else if (amount <= 30000) {
          const fee = 880;
          return agentComputation(amount, fee, line);
        } else if (amount <= 45000) {
          const fee = 1210;
          return agentComputation(amount, fee, line);
        } else if (amount <= 60000) {
          const fee = 1500;
          return agentComputation(amount, fee, line);
        } else if (amount <= 125000) {
          const fee = 1925;
          return agentComputation(amount, fee, line);
        } else if (amount <= 250000) {
          const fee = 3575;
          return agentComputation(amount, fee, line);
        } else if (amount <= 500000) {
          const fee = 7000;
          return agentComputation(amount, fee, line);
        } else if (amount <= 1000000) {
          const fee = 12500;
          return agentComputation(amount, fee, line);
        } else if (amount <= 2000000) {
          const fee = 15000;
          return agentComputation(amount, fee, line);
        } else if (amount <= 4000000) {
          const fee = 18000;
          return agentComputation(amount, fee, line);
        } else if (amount <= 5000000) {
          const fee = 20000;
          return agentComputation(amount, fee, line);
        } else {
          return('- Maximum is 5000000');
        }
      }
}

function woah(){
    MTN().agentWithdraw(5000)
}