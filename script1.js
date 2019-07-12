function formatMoney(sum) {
    
   return sum.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');

}


$( document ).ready( function () {

    $( ".btn" ).on( "click", function () {
        var initialInvest = parseFloat( $( "#initial-investment" ).val() );
        var monthlyInvest = parseFloat( $( "#monthly-investment" ).val() );
        var monthsNumber = parseFloat( $( "#months-number" ).val() );
        var yearlyInterest = parseFloat( $( "#yearly-interest" ).val() );
        var yearlyInterestDec = yearlyInterest / 100;
        var monthlyInterest = ( ( 1 + yearlyInterestDec ) ** ( 1 / 12 ) ) - 1;

        function profitCalc( initialInvest, monthlyInvest, monthsNumber, monthlyInterest ) {

            // var firstMonth = initialInvest * (1 + monthlyInterest); //fisrtMonth is 106.50

            // var secondMonth = (firstMonth + monthlyInvest) * (1 + monthlyInterest); //secondMonth is 166.67

            // var thirdMonth = (secondMonth + monthlyInvest) * (1 + monthlyInterest); //thirdMonth is 230.75

            var totalEndOfMonth, previousTotalEndOfMonth;

            for ( var i = 1; i <= monthsNumber; i++ ) {
                //we calculate the end of this month
                // console.log("we calculate total at the end of the month " + i);
                if ( i == 1 ) {

                    totalEndOfMonth = initialInvest * ( 1 + monthlyInterest ); //fisrtMonth is 106.50

                } else {

                    totalEndOfMonth = ( previousTotalEndOfMonth + monthlyInvest ) * ( 1 + monthlyInterest );

                }

                // console.log("totalEndOfMonth for months " + i + " is " + totalEndOfMonth);

                previousTotalEndOfMonth = totalEndOfMonth;
            }

            var totalInvested = initialInvest + monthlyInvest * monthsNumber;
            var accumulatedValue = totalEndOfMonth + monthlyInvest;

            // console.log("The totalInvested is " + totalInvested);
            // console.log("The profit is " + profit);
            // console.log("The accumulatedValue is " + accumulatedValue);

            return {
                totalInvested: totalInvested,
                accumulatedValue: accumulatedValue,
                profit: accumulatedValue - totalInvested
            };


        }

        var calculation = profitCalc( initialInvest, monthlyInvest, monthsNumber, monthlyInterest );
        // console.log( "calculation is " );
        // console.log( calculation );

        $(".result-boxes").removeClass("hidden");
        $("#total-invested p").html("$ " + formatMoney(calculation.totalInvested));
        $("#total-interest p").html("$ " + formatMoney(calculation.profit));
        $("#total-accumulated p").html("$ " + formatMoney(calculation.accumulatedValue));

    } );

} );