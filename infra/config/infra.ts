import { EnvConfig } from "../lib/env-config";
import { EnvType } from "../lib/env-type";

export const config: EnvConfig = {
  environmentType: EnvType.infra,
  region: "ca-central-1",
  // vpcId: "vpc-0d8445a352c94cdfb",
  zone: {
    id: "Z01882613UGS8IJV8I0PE",
    name: "metriport.com",
  },
  domain: "test.metriport.com",
  subdomain: "fhir",
  dbName: "fhir",
  dbUsername: "metriport_admin",
  // slack: {
  //   workspaceId: "T042KJEERSL",
  //   alertsChannelId: "C04T5Q9JHFX",
  //   snsTopicArn:
  //     "arn:aws:sns:us-east-2:463519787594:StagingAPIInfrastructureStack-SlackSnsTopic99893BE3-RBeXyk1bYZe1",
  // },
  vpnServerCertArn:
    "arn:aws:acm:ca-central-1:463519787594:certificate/c25e725d-f78c-488b-bb00-13a995dad3a1",
};
export default config;
