function calculateProfit(initialInvestment, monthlyInvestment, monthsNumber, profitRate) {
    if (monthsNumber == 0) {
        return 0;
    }

    var totalProfitBeginningOfMonth = calculateProfit(initialInvestment, monthlyInvestment, monthsNumber-1, profitRate); 
    var totalInvestmentBeginningOfMonth = initialInvestment + monthlyInvestment * (monthsNumber-1);

    var sumBeginningOfMonth = totalInvestmentBeginningOfMonth + totalProfitBeginningOfMonth;

    var profitForMonth = sumBeginningOfMonth * profitRate;
    
    
    return totalProfitBeginningOfMonth + profitForMonth;
}


$( document ).ready( function () {
    $( ".btn" ).on( "click", function () {
        $( ".header" ).css( "color", "red" );

        var initialInvestment, monthlyInvestment, monthsNumber;

        initialInvestment = parseFloat($( "#initial-investment" ).val());
        monthlyInvestment = parseFloat($( "#monthly-investment" ).val());
        monthsNumber = parseFloat($( "#months-number" ).val());
        yearlyInterest = parseFloat($("#yearly-interest").val());

        var totalInitialInvestment = initialInvestment + monthlyInvestment * monthsNumber;
        console.log(totalInitialInvestment);
        
        var monthlyInterest = yearlyInterest; // TODO

        profit = calculateProfit(initialInvestment, monthlyInvestment, monthsNumber, monthlyInterest );
        console.log('profit', profit);
        
    } );


} );    