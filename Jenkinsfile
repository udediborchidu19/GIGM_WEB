pipeline{
    agent any
    parameters{
        
             string(name: 'SPEC', defaultValue: "cypress/e2e/**/**", description: "Enter the script in the jenkins file")
        choice(name: 'BROWSER', choices:['chrome', 'edge', 'firefox'], description: "Choose browser type")
        
    }
    // options{
        
    //         // ansiColor('xterm')
        
    // }
    stages{
        stage('Building'){
            steps{
                echo "Building the application"
            }
            
        }
        stage('Testing'){
            steps{
                bat 'npm i'
                bat 'npx cypress run --browser $(BROWSER) --spec $(SPEC)'
            }
        }
        stage('Deploying'){
            steps{
                 echo "deploying the application"
            }
           
        }
    }

    post{
        always{
            publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: false, reportDir: 'cypress/report', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: '', useWrapperFileDirectly: true])
        }
    }

    
}