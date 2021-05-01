import {
  App,
  Duration,
  Stack,
  StackProps,
  aws_sqs as sqs,
  aws_sns as sns,
  aws_sns_subscriptions as subs
} from 'aws-cdk-lib';

export class AwscdkV2DemoStack extends Stack {
  constructor(scope: App, id: string, props?: StackProps) {
    super(scope, id, props);

    const queue = new sqs.Queue(this, 'AwscdkV2DemoQueue', {
      visibilityTimeout: Duration.seconds(300)
    });

    const topic = new sns.Topic(this, 'AwscdkV2DemoTopic');

    topic.addSubscription(new subs.SqsSubscription(queue));
  }
}
