import { ResourcesConfig } from "aws-amplify";

const amplifyConfig: ResourcesConfig = {
    Auth: {
      Cognito: {
        userPoolClientId: '3hc23uiu70b7pl8oidiis48beq',
        userPoolId: 'ap-southeast-2_6YvV5FrF7',
        }
      }
    }

export default amplifyConfig;
