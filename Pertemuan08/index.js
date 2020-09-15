let account1 = {
    name: "Dubu",
    expenses: [],
    addExpenses: function(description, amount){
        this.expenses.push({"description": description, "amount": amount});
    },
    getAccountSummary(){
      let sum = 0;
      this.expenses.forEach((item)=>{
        sum+=item.amount;
      })
      return `${sum}`;
    }
};
account1.addExpenses('Beli Ramen', 20000);
account1.addExpenses('Beli Coca Cola', 7000);
console.log(`Total pengeluaran ${account1.name} adalah Rp.${account1.getAccountSummary()}`);