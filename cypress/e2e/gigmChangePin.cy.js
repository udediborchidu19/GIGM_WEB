// import { it } from "mocha";
import Change_Wallet_Pin from "../PageObject/GIGM_Change_Wallet_Pin";

describe('Change_Auth_Credentials', ()=> {

    const serverId = '4sxb33qk'; // Replace SERVER_ID with an actual Mailosaur Server ID
    const testEmail = `tune-pan@4sxb33qk.mailosaur.net` ;
    // const apiKey =  'EUafD1OPlOHePJDkRxXZtbUduYGQai45';
    const server_domain = 'tune-pan@4sxb33qk.mailosaur.net';
    

    it('ChangePin', ()=> {
         cy.visit('https://gigm.com/');

         cy.fixture("GIGM_Resource").then((data)=> {
            const Pn = new Change_Wallet_Pin;
            Pn.AcceptCookies();
            Pn.ClickLogin_SignUp_Btn();
            Pn.ClickLogin_SignUp_Btn2();
            Pn.setUserName(data.username1);
            Pn.setPassword(data.password1);
            Pn.clickBtn();
            Pn.Wait();
            Pn.AccountAvata2();
            Pn.ChangeWalletPin();
             Pn.EnterOTP();

        });
        
            // 
            
        
            

            
});


            
                
                   
            

        })
    
    

//        
    // describe('Password reset', () => {
    //     const serverId = 'SERVER_ID'; // Replace SERVER_ID with an actual Mailosaur Server ID
    //     const testEmail = `something@${serverId}.mailosaur.net`
    
    //     it('Makes a Password Reset request', () => {
    //         cy.visit('https://github.com/password_reset')
    //         cy.title().should('equal', 'Forgot your password?')
    //         cy.get('#email_field').type(testEmail)
    //     })
    
    //     it('Gets a Password Reset email', () => {
    //         cy.mailosaurGetMessage(serverId, {
    //             sentTo: testEmail
    //         }).then(email => {
    //             expect(email.subject).to.equal('Reset your password');
    //             passwordResetLink = email.text.links[0].href;
    //         })
    //     })
    
    //     it('Follows the link from the email', () => {
    //         const validPassword = 'delighted cheese jolly cloud'
    
    //         cy.visit(passwordResetLink)
    //         cy.title().should('contain', 'Change your password')
    //         cy.get('#password').type(validPassword)
    //         cy.get('#password_confirmation').type(validPassword)
    //         cy.get('form').submit()
    //     })
    // })





// describe('Bypass OTP using Mailosaur', () => {
//   it('should bypass OTP', () => {
//     // Search for email containing OTP
//     cy.mailosaurSearch({
//       server: '4sxb33qk',
//       apiKey: 'EUafD1OPlOHePJDkRxXZtbUduYGQai45',
//       criteria: {
//         sentTo: 'https://mailosaur.com/app/servers/4sxb33qk/messages/inbox',
//         subject: 'OTP',
//       },
//     }).then((searchResult) => {
//       // Get email details
//       cy.mailosaurGetEmail({
//         server: 'your-mailosaur-server-id',
//         apiKey: 'your-mailosaur-api-key',
//         id: searchResult.items[0].id,
//       }).then((email) => {
//         // Extract OTP from email text
//         const otp = /OTP is (\d+)/.exec(email.text.body)[1];
        
//         // Enter OTP in application
//         cy.get('#otp-input').type(otp);
//         cy.get('#login-button').click();
//       });
//     });
//   });
// });

        
        
