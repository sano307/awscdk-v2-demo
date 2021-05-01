import { expect as expectCDK, haveResource } from '@aws-cdk/assert';
import { App } from 'aws-cdk-lib';
import * as AwscdkV2Demo from '../lib/awscdk-v2-demo-stack';

test('SQS Queue Created', () => {
    const app = new App();
    // WHEN
    const stack = new AwscdkV2Demo.AwscdkV2DemoStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(haveResource("AWS::SQS::Queue",{
      VisibilityTimeout: 300
    }));
});

test('SNS Topic Created', () => {
  const app = new App();
  // WHEN
  const stack = new AwscdkV2Demo.AwscdkV2DemoStack(app, 'MyTestStack');
  // THEN
  expectCDK(stack).to(haveResource("AWS::SNS::Topic"));
});
