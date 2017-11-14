var FormValidator = function () {

    this.formArr  =[];
    var warning="";
    validator = this;

    this.set =  function(rule_,dom_, message_,options_){
        this.formArr.push({rule:rule_,dom:dom_,message:message_,options:options_});
    }

    this.validate  =function () {
        this.formArr.forEach(function (elem) {

            switch(elem.rule){
                case 'required':
                    validator.warning  +=validator.isRequiredSatisfied(elem);
                    break;
                case 'requiredNotZero':
                    validator.warning  +=validator.isRequiredNotZeroSatisfied(elem);
                    break;
                case 'phone':
                    validator.warning  +=validator.isPhoneSatisfied(elem);
                    break;
                case 'tcno':
                    validator.warning  +=validator.isTcnoSatisfied(elem);
                    break;
                case 'onlyOne':
                    validator.warning  +=validator.isOnlyOneSatisfied(elem);
                    break;
                case 'atLeastOne':
                    validator.warning  +=validator.isAtLeastOneSatisfied(elem);
                    break;
                case 'length':
                    validator.warning  +=validator.isLengthSatisfied(elem);
                    break;
                case 'vergikimlik':
                    validator.warning  +=validator.isVergiKimlikSatisfied(elem);
                    break;
                case 'checked':
                    validator.warning  +=validator.isCheckedSatisfied(elem);
                    break;

            }
        });
    }


    this.isCheckedSatisfied=function(elem){
        if($(elem.dom).is(':visible') && ($(elem.dom).attr('checked')!==true)){
            return elem.message+"\n";
        }
        else{
            return "";
        }
    }

    this.isRequiredSatisfied=function(elem){
        if($(elem.dom).is(':visible') && ($(elem.dom).val()==="")){
            return elem.message+"\n";
        }
        else{
            return "";
        }
    }


    this.isRequiredNotZeroSatisfied=function(elem){
        if($(elem.dom).is(':visible') && ($(elem.dom).val()==="" || $(elem.dom).val()==='0')){
            return elem.message+"\n";
        }
        else{
            return "";
        }
    }

    this.isPhoneSatisfied=function(elem){
        if($(elem.dom).is(':visible')  &&  (!sayisalalan($(elem.dom).val()) || $(elem.dom).val().length!==10  )){
            return elem.message+"\n";
        }
        else{
            return "";
        }
    }



    this.isTcnoSatisfied=function(elem){
        if($(elem.dom).is(':visible')  &&  (!check_tcno($(elem.dom).val()) && $(elem.dom).val()!=="") ){
            return elem.message+"\n";
        }
        else{
            return "";
        }
    }

    this.isVergiKimlikSatisfied=function(elem){
        if($(elem.dom).is(':visible')  &&  (!vergikimlik($(elem.dom).val()) && $(elem.dom).val()!=="") ){
            return elem.message+"\n";
        }
        else{
            return "";
        }
    }


    this.isOnlyOneSatisfied=function(elem){
        var count  =0;
        elem.dom.forEach(function (dom) {
            if( $(dom).is(':visible')  && $(dom).val()!==""){
                count++;
            }
        });

        if(count>1){
            return elem.message+"\n";
        }
        else
        {
            return "";
        }
    }


    this.isAtLeastOneSatisfied=function(elem){
        var count  =0;
        elem.dom.forEach(function (dom) {
            if( $(dom).is(':visible')  && $(dom).val()!==""){
                count++;
            }
        });

        if(count<1){
            return elem.message+"\n";
        }
        else
        {
            return "";
        }
    }

    this.isLengthSatisfied=function(elem){
            if( $(elem.dom).is('visible')  && $(elem.dom).val()!=="" && $(elem.dom).val().length!==elem.options ){
                return elem.message+"\n";
            }
            else
            {
                return "";
            }
    }

    this.getWarning=function(){
    return warning;
    }



}
