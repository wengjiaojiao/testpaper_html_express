function AllQuestionBank() {
    return [
        new Question("gap1","统一建模语言",1),
        new Question("gap2","封装性继承性多态性",3),
        new Question("radio1","B",2),
        new Question("radio2","A",2),
        new Question("check1","ABD",3),
        new Question("check2","ABC",3),
        new Question("judge1","F",2),
        new Question("judge2","T",2),
        new Question("textarea","模型是对现实世界的简化和抽象。",5)
    ]
}

AllQuestionBank.comparison = function() {
  var formvaluegetter = new FormValueGetter("form");
  var questionBanks = AllQuestionBank();
  var sumScore = 0;
  var formvalues = formvaluegetter.getValues();

  formvalues.forEach(function(formvalue ,i) {
      if(formvalue.name === questionBanks[i].name && formvalue.value === questionBanks[i].answer) {
          sumScore +=  questionBanks[i].score;
      }
  });
  return sumScore;
}
