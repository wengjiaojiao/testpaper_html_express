var AllQuestionBank = require('./questionBank');
var _ = require("./public/lodash.src.js");

function scoreGetter(infors){
  var questionBanks = AllQuestionBank();
  var sumScore = 0;
  //console.log(questionBanks);

  _.forEach(infors,function(infor,key) {
    _.forEach(questionBanks,function(questionBank,i) {
      if(key == questionBank.name && infor == questionBank.answer) {
          sumScore +=  questionBank.score;
      }
    })
  });

  return sumScore;
}
module.exports = scoreGetter;
