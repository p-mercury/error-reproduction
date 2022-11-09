import { App } from "aws-cdk-lib";

new App(),
  "pipeline",
  {
    stackName: "jumper-app-pipeline",
    env: {
      account: process.env.CDK_DEFAULT_ACCOUNT,
      region: process.env.CDK_DEFAULT_REGION,
    },
  };
