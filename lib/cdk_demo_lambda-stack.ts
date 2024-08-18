import * as cdk from "aws-cdk-lib";
import { LambdaIntegration, RestApi } from "aws-cdk-lib/aws-apigateway";
import { Code, Function, Runtime } from "aws-cdk-lib/aws-lambda";
import { CfnBucket, Bucket } from "aws-cdk-lib/aws-s3";
import { Construct } from "constructs";
import path = require("path");

export class CdkDemoLambdaStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const lambda = new Function(this, "demo-cdk-lambda", {
      runtime: Runtime.NODEJS_20_X,
      code: Code.fromAsset(path.join(__dirname, "resources")),
      handler: "demoLambda.handler",
    });

    const apiGateway = new RestApi(this, "demo-api-gateway", {
      restApiName: "dummy-api",
    });

    const lambdaIntegration = new LambdaIntegration(lambda, { proxy: true });

    const resource = apiGateway.root.addResource("hello");
    resource.addMethod("GET", lambdaIntegration);
  }
}
