import * as cdk from "aws-cdk-lib";
import { LambdaIntegration, RestApi, Stage } from "aws-cdk-lib/aws-apigateway";
import { Code, Function, Runtime } from "aws-cdk-lib/aws-lambda";
import { CfnBucket, Bucket } from "aws-cdk-lib/aws-s3";
import { Construct } from "constructs";
import * as path from "path";

export class CdkDemoLambdaStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const lambda = new Function(this, "demo-cdk-lambda", {
      functionName: "cdk-lambda",
      runtime: Runtime.NODEJS_20_X,
      code: Code.fromAsset(path.join(__dirname, "..", "src")),
      handler: "demoLambda.handler",
    });

    const apiGateway = new RestApi(this, "demo-api-gateway", {
      restApiName: "dummy-api",
    });

    const lambdaIntegration = new LambdaIntegration(lambda, { proxy: true });

    const resource = apiGateway.root.addResource("hello");
    resource.addMethod("GET", lambdaIntegration);

    // Define a deployment and a stage
    const deployment = new cdk.aws_apigateway.Deployment(this, "Deployment", {
      api: apiGateway,
    });

    const stage = new Stage(this, "Stage", {
      deployment,
      stageName: this.node.tryGetContext("stage-env"), // Set your stage name here
    });

    apiGateway.deploymentStage = stage;
  }
}
