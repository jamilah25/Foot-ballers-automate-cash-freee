# Terraform Cloud Deployment

## Usage

1. Install [Terraform](https://terraform.io) and configure AWS credentials.
2. Copy `main.tf`, `cloudfront.tf`, `mongodb-atlas.tf` to your infra directory.
3. Run `terraform init && terraform plan && terraform apply`

## Monitoring

- Use `cloudwatch-dashboard.json` to create a dashboard in the AWS CloudWatch console.
- Add more widgets for MongoDB metrics, S3 usage, and custom application logs.