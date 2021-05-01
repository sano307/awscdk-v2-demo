#!/usr/bin/env node
import { App } from 'aws-cdk-lib';
import { AwscdkV2DemoStack } from '../lib/awscdk-v2-demo-stack';

const app = new App();
new AwscdkV2DemoStack(app, 'AwscdkV2DemoStack');
