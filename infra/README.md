# Metriport FHIR Server Infrastructure

This package is used to build and update the infrastructure required for Metriport's FHIR Server.

It uses AWS CDK + TypeScript.

## Deploy to AWS

It requires AWS CLI setup properly.

Run these commands on the terminal from the `./infra` folder of this repository:

```shell
$ cdk bootstrap -c env=<env> # only needs to be run once
$ cdk deploy -c env=<env> FHIRSecretsStack
```

Once the secrets stack is deployed, update the secret with the DB password and deploy the FHIR server
with the command below:

```shell
$ cdk deploy -c env=<env> FHIRServerStack
```