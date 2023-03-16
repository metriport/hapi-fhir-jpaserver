import { Stack, StackProps } from "aws-cdk-lib";
import * as secret from "aws-cdk-lib/aws-secretsmanager";
import { Construct } from "constructs";
import { EnvConfig } from "./env-config";

interface SecretStackProps extends StackProps {
  config: EnvConfig;
}

export const FHIR_DB_SECRET_NAME = "FHIRServerDBPasswordV2";

export class FHIRSecretsStack extends Stack {
  constructor(scope: Construct, id: string, props: SecretStackProps) {
    super(scope, id, props);

    new secret.Secret(this, FHIR_DB_SECRET_NAME, {
      secretName: FHIR_DB_SECRET_NAME,
      generateSecretString: {
        excludePunctuation: true,
        includeSpace: false,
      },
    });
  }
}
