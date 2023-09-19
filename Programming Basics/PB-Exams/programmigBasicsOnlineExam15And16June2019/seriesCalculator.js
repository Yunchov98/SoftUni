function seriesCalculator(input) {

    let name = input[0];
    let seasonsCount = Number(input[1]);
    let episodesCount = Number(input[2]);
    let episodeDuration = Number(input[3]);

    let timeForAds = episodeDuration * 0.20;
    let timeForSpecialEpisodes = seasonsCount * 10;

    let totalTime = (episodeDuration + timeForAds) * episodesCount * seasonsCount + timeForSpecialEpisodes;

    console.log(`Total time needed to watch the ${name} series is ${Math.floor(totalTime)} minutes.`);

}

seriesCalculator(["Lucifer",
    "3",
    "18",
    "55"])
    ;