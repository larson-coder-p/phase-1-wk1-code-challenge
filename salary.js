function calculateNssfDeductions(grossSalary) {
    const tier1Limit = 7000;
    const tier2Limit = 36000;
    const tier1Rate = 0.06;
    const tier2Rate = 0.06;

    let tier1Deductions = Math.min(grossSalary, tier1Limit) * tier1Rate;
    let tier2Deductions = 0;

    if (grossSalary > tier1Limit) {
        tier2Deductions = Math.min(grossSalary - tier1Limit, tier2Limit - tier1Limit) * tier2Rate;
    }

    return tier1Deductions + tier2Deductions;
}


function calculateNssfDeductions(grossSalary) {
    return 0.06 * grossSalary;
}

function calculateNhifDeductions(grossSalary) {
    if (grossSalary <= 5999) return 150;
    if (grossSalary <= 7999) return 300;
    if (grossSalary <= 11999) return 400;
    if (grossSalary <= 14999) return 500;
    if (grossSalary <= 19999) return 600;
    if (grossSalary <= 24999) return 750;
    if (grossSalary <= 29999) return 850;
    if (grossSalary <= 34999) return 900;
    if (grossSalary <= 39999) return 950;
    if (grossSalary <= 44999) return 1000;
    if (grossSalary <= 49999) return 1100;
    if (grossSalary <= 59999) return 1200;
    if (grossSalary <= 69999) return 1300;
    if (grossSalary <= 79999) return 1400;
    if (grossSalary <= 89999) return 1500;
    if (grossSalary <= 99999) return 1600;
    return 1700;
}

function calculatePayeTax(grossSalary, nssfDeductions) {
    const taxableIncome = grossSalary - nssfD
}


function calculateNetSalary() {
    const basicSalary = parseFloat(document.getElementById('basic-salary').value);
    const benefits = parseFloat(document.getElementById('benefits').value);
}
    if (isNaN(basicSalary) || isNaN(benefits)) {
        alert("Please enter valid numbers for basic salary and benefits.");
        return;
    }

      
      const personalRelief = 2400;
      paye -= personalRelief;
  
      
      if (paye < 0) {
          paye = 0;
      }
  
      return paye;
  

    function calculateNetSalary() {
        const basicSalary = parseFloat(document.getElementById('basic-salary').value);
        const benefits = parseFloat(document.getElementById('benefits').value);
    }
        if (isNaN(basicSalary) || isNaN(benefits)) {
            alert("Please enter valid numbers for basic salary and benefits.");
            return;
        }
    
        const grossSalary = basicSalary + benefits;
        const nssfDeductions = calculateNssfDeductions(grossSalary);
        const nhifDeductions = calculateNhifDeductions(grossSalary);
        const payeTax = calculatePayeTax(grossSalary, nssfDeductions);
        const netSalary = grossSalary - nssfDeductions - nhifDeductions - payeTax;
    
        document.getElementById('gross-salary').innerText = grossSalary.toFixed(2);
        document.getElementById('nssf-deductions').innerText = nssfD








    