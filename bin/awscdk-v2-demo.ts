#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { AwscdkV2DemoStack } from '../lib/awscdk-v2-demo-stack';

const app = new cdk.App();
new AwscdkV2DemoStack(app, 'AwscdkV2DemoStack');
