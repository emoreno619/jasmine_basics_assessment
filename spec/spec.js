var grader = require("../grader.js");

describe('grader', function(){

 it('letterGrader converts a numeric grade to a letter grade', function() {
    expect(grader.letterGrader(95)).toEqual('A')
    expect(grader.letterGrader(99)).toEqual('A+')
    expect(grader.letterGrader(90)).toEqual('A-')
    expect(grader.letterGrader(89.9)).toEqual('B+')
    expect(grader.letterGrader(87.99)).toEqual('B')
    expect(grader.letterGrader(80.1)).toEqual('B-')
    expect(grader.letterGrader(79)).toEqual('C+')
    expect(grader.letterGrader(74)).toEqual('C')
    expect(grader.letterGrader(70)).toEqual('C-')
    expect(grader.letterGrader(68)).toEqual('D+')
    expect(grader.letterGrader(65)).toEqual('D')
    expect(grader.letterGrader(60)).toEqual('D-')
    expect(grader.letterGrader(0)).toEqual('F')
 });

 it('averageScore returns the average of an array of scores', function() {
    expect(grader.averageScore([5, 4, 3, 2, 1])).toEqual(3)
    expect(grader.averageScore([90, 95, 87, 60])).toEqual(83)
 });

 it('medianScore returns the median of an array of scores', function() {
    expect(grader.medianScore([5, 4, 3, 2, 1])).toEqual(3)
    expect(grader.medianScore([5, 4, 1, 2, 3])).toEqual(3)
    expect(grader.medianScore([90, 95, 87, 60])).toEqual(88.5)
 });

 it('modeScore returns the mode of an array of scores', function() {
    expect(grader.modeScore([5, 4, 3, 2, 1])).toEqual(1)
    expect(grader.modeScore([90, 95, 87, 60])).toEqual(60)
    expect(grader.modeScore([90, 95, 87, 60, 60])).toEqual(60)
    expect(grader.modeScore([90, 60, 87, 60])).toEqual(60)
    // expect(grader.modeScore([90, 95, 87, 60, 60, 95])).toEqual([60, 95])
 });   												
});