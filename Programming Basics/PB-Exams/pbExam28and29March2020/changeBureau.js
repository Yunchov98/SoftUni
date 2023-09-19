function changeBureau(input) {

    let bitcoinsCount = Number(input[0]);
    let chineseYuanCount = Number((input[1]));
    let commission = Number(input[2]);

    let bitcoinPrice = bitcoinsCount * 1168;
    let chineseYuanPriceInDollars = chineseYuanCount * 0.15;
    let chineseYuanPriceInLeva = chineseYuanPriceInDollars * 1.76;

    let total = bitcoinPrice + chineseYuanPriceInLeva;
    let totalInEuro = (total / 1.95);
    let comimssionInEuro = totalInEuro * (commission / 100);

    let totalAfterCommission = totalInEuro - comimssionInEuro;

    console.log(totalAfterCommission.toFixed(2));

}

changeBureau(['1', '5', '5']);