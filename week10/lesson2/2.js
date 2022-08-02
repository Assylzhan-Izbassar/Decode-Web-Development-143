function compareRobots(firstRobotResults, secondRobotResults) {
    let firstResult = 0;
    let secondResult = 0;

    for(let i=0; i < firstRobotResults.length; ++i) {
        firstResult += firstRobotResults[i];
    }

    for(let i=0; i < secondRobotResults.length; ++i) {
        secondResult += secondRobotResults[i];
    }

    if(firstResult >= secondResult) {
        return firstRobotResults;
    }
    re
}