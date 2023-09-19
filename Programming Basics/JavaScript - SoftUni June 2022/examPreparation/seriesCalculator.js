function seriesCalculator(input) {

    let name = input[0];
    let seasonsCount = Number(input[1]);
    let episodesCount = Number(input[2]);
    let episodeDuration = Number(input[3]);

    let adsTime = episodeDuration * 0.20;
    let episodeDurationWithAds = episodeDuration + adsTime;
    let extraTime = seasonsCount * 10;

    let totalTime = (episodeDurationWithAds * episodesCount * seasonsCount) + extraTime;

    console.log(`Total time needed to watch the ${name} series is ${Math.floor(totalTime)} minutes.`);

}

seriesCalculator(["Lucifer",
    "3",
    "18",
    "55"])
    ;