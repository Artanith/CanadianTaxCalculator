//Rates Taken for 2024

//Federal Tax Brackets
var bracketFed1 = 55867; //Federal Tax Bracket 1 Max
var bracketFed2 = 111733; //Federal Tax Bracket 2 Max
var bracketFed3 = 173205; //Federal Tax Bracket 3 Max
var bracketFed4 = 246752; //Federal Tax Bracket 4 Max

//Federal Tax Bracket Rates
var bracketFedPct1 = 0.15; //Federal Tax Bracket 1 Percentage
var bracketFedPct2 = 0.205; //Federal Tax Bracket 2 Percentage
var bracketFedPct3 = 0.26; //Federal Tax Bracket 3 Percentage
var bracketFedPct4 = 0.29; //Federal Tax Bracket 4 Percentage
var bracketFedPct5 = 0.33; //Federal Tax Bracket 5 Percentage

//BC Tax Brackets
var bracketBC1 = 47937; //British Columbia Tax Bracket 1 Max
var bracketBC2 = 95874; //British Columbia Tax Bracket 2 Max
var bracketBC3 = 110076; //British Columbia Tax Bracket 3 Max
var bracketBC4 = 133664; //British Columbia Tax Bracket 4 Max
var bracketBC5 = 181232; //British Columbia Tax Bracket 5 Max
var bracketBC6 = 252272; //British Columbia Tax Bracket 6 Max

//BC Tax Bracket Rates
var bracketBCPct1 = 0.0506; //British Columbia Tax Bracket 1 Percentage
var bracketBCPct2 = 0.077; //British Columbia Tax Bracket 2 Percentage
var bracketBCPct3 = 0.105; //British Columbia Tax Bracket 3 Percentage
var bracketBCPct4 = 0.1229; //British Columbia Tax Bracket 4 Percentage
var bracketBCPct5 = 0.147; //British Columbia Tax Bracket 5 Percentage
var bracketBCPct6 = 0.168; //British Columbia Tax Bracket 6 Percentage
var bracketBCPct7 = 0.205; //British Columbia Tax Bracket 7 Percentage

//Other Taxes
var maxCPP = 68500; //Maximum CPP Pay
var pctCPP = 0.0595; //CPP Percentage Withholding
var cppExemption = 3500; //Basic CPP Exemption
var maxCPP2 = 73200; //Maximum CPP2 Pay
var pctCPP2 = 0.04; //CPP2 Percentage Withholding
var maxEI = 63200; //Maximum EI Pay
var pctEI = 0.0166; //EI Percentage


//Setup Function to Retrieve Input Values
function grabValue(name){
    return parseFloat(document.getElementById(name).value);
};

function output (results, tag ,amount) {

    //Grab Results div and Create an Output div
    var target = document.getElementById(results);
    label = tag + ": $" + numberWithCommas(Math.round(amount));
    var outputItem = document.createElement('div');

    //Set Text For New Div
    outputItem.innerText = label;

    //Render Output
    target.appendChild(outputItem);

};

//Add Commas to numbers
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

//Function to Calculate Federal Taxes Based On Different Brackets
function fedTaxes (income) {

    if (income <= bracketFed1) {
        return income * bracketFedPct1;
    } else if (income <= bracketFed2) {
        return (income - bracketFed1) * bracketFedPct2 + bracketFed1 * bracketFedPct1;
    } else if (income <= bracketFed3) {
        return (income - bracketFed2) * bracketFedPct3 + (bracketFed2 - bracketFed1) * bracketFedPct2 + bracketFed1 * bracketFedPct1;
    } else if (income <= bracketFed4) {
        return (income - bracketFed3) * bracketFedPct4 + (bracketFed3 - bracketFed2) * bracketFedPct3 + (bracketFed2 - bracketFed1) * bracketFedPct2 + bracketFed1 * bracketFedPct1;
    } else {
       return (income - bracketFed4) * bracketFedPct5 + (bracketFed4 - bracketFed3) * bracketFedPct4 + (bracketFed3 - bracketFed2) * bracketFedPct3 + (bracketFed2 - bracketFed1) * bracketFedPct2 + bracketFed1 * bracketFedPct1;
    }
};

//Function to Calculate BC Taxes Based On Different Brackets
function bcTaxes (income) {

    if (income <= bracketBC1) {
        return income * bracketBCPct1;
    } else if (income <= bracketBC2) {
        return (income - bracketBC1) * bracketBCPct2 + bracketBC1 * bracketBCPct1;
    } else if (income <= bracketBC3) {
        return (income - bracketBC2) * bracketBCPct3 + (bracketBC2 - bracketBC1) * bracketBCPct2 + bracketBC1 * bracketBCPct1;
    } else if (income <= bracketBC4) {
        return (income - bracketBC3) * bracketBCPct4 + (bracketBC3 - bracketBC2) * bracketBCPct3 + (bracketBC2 - bracketBC1) * bracketBCPct2 + bracketBC1 * bracketBCPct1;
    } else if (income <= bracketBC5) {
        return (income - bracketBC4) * bracketBCPct5 + (bracketBC4 - bracketBC3) * bracketBCPct4 + (bracketBC3 - bracketBC2) * bracketBCPct3 + (bracketBC2 - bracketBC1) * bracketBCPct2 + bracketBC1 * bracketBCPct1;
    } else if (income <= bracketBC6) {
        return (income - bracketBC5) * bracketBCPct6 + (bracketBC5 - bracketBC4) * bracketBCPct5 +(bracketBC4 - bracketBC3) * bracketBCPct4 + (bracketBC3 - bracketBC2) * bracketBCPct3 + (bracketBC2 - bracketBC1) * bracketBCPct2 + bracketBC1 * bracketBCPct1;
    } else { 
        return (income - bracketBC6) * bracketBCPct7 + (bracketBC6 - bracketBC5) * bracketBCPct6 + (bracketBC5 - bracketBC4) * bracketBCPct5 + (bracketBC4 - bracketBC3) * bracketBCPct4 + (bracketBC3 - bracketBC2) * bracketBCPct3 + (bracketBC2 - bracketBC1) * bracketBCPct2 + bracketBC1 * bracketBCPct1;
    }
};

//Calculate CPP Tax
function cppTax (incomeCPP){
    if (incomeCPP < maxCPP ) {
        return (incomeCPP - cppExemption) * pctCPP;
    } else {
        return (maxCPP - cppExemption) * pctCPP;
    }
};

//Calculate CPP2 Tax
function cpp2Tax (incomeCPP2) {
    if (incomeCPP2 < maxCPP ) {
        return 0;
    } else if (incomeCPP2 < maxCPP2) {
        return (incomeCPP2 - maxCPP) * pctCPP2;
    } else {
        return (maxCPP2 - maxCPP) * pctCPP2;
    }
};

//Calculate EI Tax
function eiTax (incomeEI) {
    if (incomeEI < maxEI ) {
        return incomeEI * pctEI;
    } else {
        return maxEI * pctEI;
    }
};


//Calculate Taxes
function taxAnalysis() {

    //Grab Values from User Inputs
    var incomeKatie = grabValue("incomeKatie");
    var incomeNate = grabValue("incomeNate");
    var RRSPpctKatie = grabValue("RRSPpctKatie")/100;
    var RRSPpctNate = grabValue("RRSPpctNate")/100;
    var payPeriod = parseFloat(document.getElementById("payPeriod").value);
  
    //Calculate Initial Values
    var incomeTotal = incomeKatie + incomeNate;
    var rrspKatie = incomeKatie * RRSPpctKatie;
    var rrspNate = incomeNate * RRSPpctNate;
    var rrspTotal = rrspKatie + rrspNate;
    var postDeductIncomeKatie = incomeKatie - rrspKatie;
    var postDeductIncomeNate = incomeNate - rrspNate;
    var federalKatie = fedTaxes(postDeductIncomeKatie);
    var federalNate = fedTaxes(postDeductIncomeNate);
    var federalTotal = federalKatie + federalNate;
    var bcKatie = bcTaxes(postDeductIncomeKatie);
    var bcNate = bcTaxes(postDeductIncomeNate);
    var bcTotal = bcKatie + bcNate;
    var taxKatie =  federalKatie + bcKatie;
    var taxNate =  federalNate + bcNate;
    var cppKatie = cppTax(incomeKatie) + cpp2Tax(incomeKatie);
    var cppNate = cppTax(incomeNate) + cpp2Tax(incomeNate);
    var cppCombined = cppNate + cppKatie;
    var eiKatie = eiTax(incomeKatie);
    var eiNate = eiTax(incomeNate);
    var EITotal = eiKatie + eiNate;
    var afterTaxKatie = postDeductIncomeKatie - taxKatie - cppKatie - eiKatie;
    var afterTaxNate = postDeductIncomeNate - taxNate - cppNate - eiNate;
    var paycheckKatie =  afterTaxKatie / payPeriod;
    var paycheckNate = afterTaxNate / payPeriod;
    var paycheckTotal = paycheckKatie + paycheckNate;

    output("resultsKatie", "Gross Income", incomeKatie);
    output("resultsKatie", "RRSP Amount", rrspKatie);
    output("resultsKatie", "Federal Taxes", federalKatie);
    output("resultsKatie", "British Columbia Taxes", bcKatie);
    output("resultsKatie", "CPP Tax", cppKatie);
    output("resultsKatie", "EI Tax", eiKatie);
    output("resultsKatie", "After Tax Income", afterTaxKatie);
    output("resultsKatie", "Paycheck Amount", paycheckKatie);
    output("resultsNate", "Gross Income", incomeNate);
    output("resultsNate", "RRSP Amount", rrspNate);
    output("resultsNate", "Federal Taxes", federalNate);
    output("resultsNate", "British Columbia Taxes", bcNate);
    output("resultsNate", "CPP Tax", cppNate);
    output("resultsNate", "EI Tax", eiNate);
    output("resultsNate", "After Tax Income", afterTaxNate);
    output("resultsNate", "Paycheck Amount", paycheckNate);
    output("resultsTotal", "Gross Income", incomeTotal);
    output("resultsTotal", "RRSP Amount", rrspTotal);
    output("resultsTotal", "Federal Combined Taxes", federalTotal);
    output("resultsTotal", "British Columbia Combined Taxes", bcTotal);
    output("resultsTotal", "CPP Tax", cppCombined);
    output("resultsTotal", "EI Tax", EITotal);
    output("resultsTotal", "Paycheck Total", paycheckTotal);
    
};

//Get and Listen For Button Clicks
var taxButton = document.getElementById('taxButton');
taxButton.addEventListener('click', taxAnalysis);