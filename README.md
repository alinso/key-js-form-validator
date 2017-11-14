# key-js-form-validator
Simple Javascript Form Validator For General Purposes



Usage : 

  var validator  =new FormValidator();

        validator.set('onlyOne',['#company_name','#person_name'],'* You cannot enter company name and person name at same time.');
        validator.set('requiredNotZero','#price','* Yo need to enter a price value other than zero.');
        validator.set('phone','#phone','* This does not look like proper phone number.');
        
        //do whatever with the produced warning...
        var warning = validator.getWarning();
        
        
