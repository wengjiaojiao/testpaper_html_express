function textJudgement() {
    var formvaluegetter = new FormValueGetter("form");
    var formnames= formvaluegetter.getNames();
    var formvalues = formvaluegetter.getValues();

    _.forEach(formnames, function(forname, i) {
        if(document.getElementsByName(forname)[i].type === "text") {
            <!-- if() -->
        }
    });
    return isText;
}
