
class Change_Wallet_Pin {
    txtUsername = "input[placeholder='example@gmail.com']";
    txtPassword = "input[placeholder='Enter Your Password']";
    clickBn = "button[title='Sign In']";
    AcceptCookiess = "#rcc-confirm-button";
    ClickLogInBtn = ".blue-btn-nav";
    clickLoginBtn2 = 'div[class="signUp-handle"]>div[class="centered"]';
    AccountAvata = 'button[id="sub-active3"]';
    Avata = "ul[id='sub-menu3'] li a";
    ClickDaptureTer = 'div[class="basic-single select_default_sty css-2b097c-container"]>div[class="select__control css-yk16xz-control"]';
    ClickDept = "div[id='departure'] div[class='select__value-container css-g1d714-ValueContainer']";
    ClickArr = '//*[@id="content1"]/div[2]/div/div/div/div[2]/div';
    
    


    const = Math.random().toString().substring(2, 10)


    AcceptCookies() {
        cy.get(this.AcceptCookiess).click();
    }


    AcceptCookies() {
        cy.get(this.AcceptCookiess).click();
    }

    ClickLogin_SignUp_Btn() {
        cy.get(this.ClickLogInBtn).click();
    }

    ClickLogin_SignUp_Btn2() {
        cy.get(this.clickLoginBtn2).click();
    }


    setUserName(username1) {
        cy.get(this.txtUsername).type(username1);
    }

    setPassword(password1) {
        cy.get(this.txtPassword).type(password1);
    }

    clickBtn() {
        cy.get(this.clickBn).click();
    }

    AccountAvata1() {
        cy.get(this.AccountAvata)
    }

    AccountVerify() {
        cy.get(this.Avata).should("have.text", "My Account");
    }

    SelectDepture() {
        cy.get(this.ClickDept).first().click({ force: true });
    }

    Wait() {
        cy.wait(5000);
    }

    AccountAvata2() {
        cy.get(this.AccountAvata).invoke('show')
        cy.contains('My Account').click({force: true});
    }

    ChangeWalletPin()
    {
        cy.xpath('//*[@id="root"]/div/div[2]/div/div[2]/div[2]/div/label[3]').click({force: true});
        cy.xpath('//*[@id="tabContent3"]/div/div[1]/div[2]/div/div/div[3]/div/div/div[2]/div/div/button').click();
    }

    
    EnterOTP()
    {

        const serverId = 'lmnrfcjr'; // Replace SERVER_ID with an actual Mailosaur Server ID
        const testEmail = `mysterious-noun@lmnrfcjr.mailosaur.net` ;
        const token =  'STVWVkJHZHNIS2JKT2EyNUIxSGZIQTEybmxEU1dGeEI6';
     // const apiKey =  'EUafD1OPlOHePJDkRxXZtbUduYGQai45';
        const server_domain = 'mysterious-noun@lmnrfcjr.mailosaur.net';

        cy.mailosaurListMessages( 
             serverId, 
            { 
               sentTo: testEmail,
               subject: 'OTP',   
               
          },
          {
            // Find messages received since Jan 1st 2020. This will be slow!
             receivedAfter: new Date('2020-01-01T00:00:00Z')
        }).then(res => {   
            cy.log(res.Object)
            cy.request({
                method : 'GET',
                url : 'https://mailosaur.com/api/messages?server=lmnrfcjr&page=&itemsPerPage=&receivedAfter=&dir=',
                headers:{
                      'Authorization': 'Basic ' + token,
                    "Content-Type" : "application/x-www-form-urlencoded",
                    "serverId" : "lmnrfcjr"
                }      
            }).then((res)=>{
                expect(res.status).to.eq(200)
                expect(res.body.items[0].summary).to.be.eq(res.body.items[0].summary)

                var pattern = /^\d{6}$/;
        
                const text = res.body.items[0].summary;
                const otpRegex = /OTP: (\d+)/;
                const match = text.match(otpRegex);
                const otp = match[1];   
                cy.log(otp);

                 // Enter OTP in application
                 cy.xpath('//*[@id="tabContent3"]/div/div[2]/div[2]/div/div/div[3]/div/div/div[1]/input[1]').type(otp, {paste: true});
                 cy.xpath('//*[@id="tabContent3"]/div/div[2]/div[2]/div/div/div[3]/div/div/div[2]/div/div/button').click({force:true});
                 cy.xpath('//*[@id="tabContent3"]/div/div[4]/div[1]/div[2]/div/div[1]/div/input').type('1111', {force:true});
                 cy.xpath('//*[@id="tabContent3"]/div/div[4]/div[1]/div[2]/div/div[2]/div/input').type('1111', {force:true});
                 cy.xpath('//*[@id="tabContent3"]/div/div[4]/div[2]/div/div/button').click({force:true});
                 cy.get('.alert').should('contains.text', 'SUCCESS');
                
            });
                    

                     
                    
    
                

}








)}

}

export default Change_Wallet_Pin;