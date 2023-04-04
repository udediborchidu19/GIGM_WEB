class GIGMSignup {
    confPassword = '//*[@id="root"]/div/div[3]/div[2]/div/div/div/div[4]/div[2]/div/input';
    txtPassword = '//*[@id="root"]/div/div[3]/div[2]/div/div/div/div[4]/div[1]/div/input';
    FirstNamee = '//*[@id="root"]/div/div[3]/div[2]/div/div/div/div[2]/div[1]/input';
    phoneNum = '//*[@id="root"]/div/div[3]/div[2]/div/div/div/div[3]/div[2]/div/input';
    checkBox = '//*[@id="root"]/div/div[3]/div[2]/div/div/div/div[5]/div/label/span';
    signupBtn = '//*[@id="root"]/div/div[3]/div[2]/div/div/div/div[6]/div/button';
    sex = '//*[@id="root"]/div/div[3]/div[2]/div/div/div/div[2]/div[2]/div/div/div[1]/div[1]';
    AcceptCookiess = "#rcc-confirm-button";


    EnterEmailAdd() {
        var pattern = 'abcdefghijklmnopqrstuvwxyz';
        var randomText = '';
        for(var i = 0; i < 8; i++){
            randomText+= pattern.charAt(Math.floor(Math.random()* pattern.length))
       var testEmail = randomText + '@4sxb33qk.mailosaur.net';
       cy.log(testEmail)
       
        }
        
        cy.get(':nth-child(6) > :nth-child(1) > .inputField_Wrap').type(testEmail);
    }

    FirstName()
    { 
    //     var pattern = 'abcdefghijklmnopqrstuvwxyz';
    //     var randomText = '';
    //     for(var i = 0; i < 8; i++){
    //         randomText+= pattern.charAt(Math.floor(Math.random()* pattern.length))
    //    var firstNam = randomText ;
    //    cy.log(firstNam)

    const arr = ['Favour Test', 'Victor Test2', 'Chidinma Test3'];
    const randomIndex = Math.floor(Math.random() * arr.length);
    const randomItem = arr[randomIndex];

    console.log(randomItem);
    cy.xpath(this.FirstNamee).type(randomItem)
       
        }
        
    

    PhoneNumber()
    {
        var pattern = '0123456789';
        var randomNum = '';
        for(var i = 0; i < 8; i++)
        {
            randomNum+= pattern.charAt(Math.floor(Math.random()* pattern.length))
            var testPhoneNum = '081' + randomNum;
        }
        
        cy.xpath(this.phoneNum).type(testPhoneNum);
    }

    EnterPassword()
    {
        cy.get(':nth-child(1) > .pass-wrapper > .inputField_Wrap').type("Peoples51@");
    }

    EnterConfirmationPassword(signup_Pass)
    {
        cy.get(':nth-child(2) > .pass-wrapper > .inputField_Wrap').type("Peoples51@");
    }

    SelSex()
    {
        cy.get('.select__value-container').click({ force: true });
        cy.get('#react-select-3-option-0').click({ force: true });
    }


    Signup()
    {
        cy.get('.col-sm-12 > .Button_Wrap').click({force:true});
        cy.wait(1000)
        cy.get('.swal2-popup').should('contain.text', 'SUCCESS');
    }

    AcceptCookies() {
        cy.get(this.AcceptCookiess).click();
    }

    CheckBoxi()
    {
        cy.get('.checkmark').click();
    }


    


    

}

export default GIGMSignup