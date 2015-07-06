function FormValueGetter(form) {
    this.form = form;
}

FormValueGetter.prototype.getValues = function() {
    var names = this.getNames();
    var values = this.nameToValue(names);

    return values;
}

FormValueGetter.prototype.nameToValue = function(names) {
    var position = 0;
    var result = [];

    for (x = 0; x < document.querySelector(this.form).length; x++) {
        if (names[x] !== "") {
            _.forEach(names, function(name, i) {
                var temp = {};
                var addValue = "";
                var elements = document.getElementsByName(name);

                _.forEach(elements, function(element, i) {
                    if (element.checked) {
                        position = i;
                        addValue += element.value;
                    }
                    if (element.type === "text" || element.type === "textarea") {
                        addValue += element.value;
                    }
                });
                temp.name = name;
                temp.value = addValue;
                result.push(temp);
            });
            return result;
        }
    }
}

FormValueGetter.prototype.getNames = function() {
    var array = [];
    for (i = 4; i < document.querySelector("form").length; i++) {
        if (document.querySelector("form")[i].name !== "") {
            array.push(document.querySelector("form")[i].name);
        };
    }
    array = _.chain(array).groupBy(function(val, n) {
        return val;
    }).map(function(val,key) {
                return key;
            }).value();
    return array;
}
