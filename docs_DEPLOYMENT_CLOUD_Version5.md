# Cloud-Native Deployment Example (AWS)

## Overview

- **Backend**: AWS Elastic Beanstalk (Node.js)
- **Frontend**: S3 + CloudFront (static hosting)
- **Database**: AWS DocumentDB (MongoDB-compatible) or managed MongoDB
- **SSL**: AWS ACM + ELB
- **DNS**: Route 53

---

## Steps

1. **Backend**
   - Push code to GitHub
   - Configure Elastic Beanstalk app:
      - Platform: Node.js
      - Set environment variables (`MONGO_URI`, `JWT_SECRET`, etc)
   - Connect to DocumentDB (`MONGO_URI`)
   - Set up EB health checks, scaling (min/max instances)

2. **Frontend**
   - Build React app (`npm run build`)
   - Upload `/build` to S3 bucket (static website hosting)
   - Configure bucket/public permissions & `index.html` as root doc
   - Set up CloudFront distribution:
      - Origin: S3 bucket
      - SSL: ACM certificate
      - Custom domain via Route 53
      
3. **HTTPS/Certificates**
   - Request ACM cert for domain(s)
   - Attach ACM cert to CloudFront and EB

4. **Environment Propagation**
   - EB and S3/CloudFront set environment via dashboard
   - Use `.env.production` for build and runtime configs

5. **Monitoring & Scaling**
   - Enable CloudWatch logs/metrics on EB (CPU, traffic)
   - Set up alarms for errors/traffic spikes
   - Use EB & CloudFront auto-scaling as needed

## Notes

- For global frontend, leverage CloudFront (CDN).
- For backups, automate snapshots of DocumentDB/MongoDB.
- Use AWS IAM to restrict resource access.
- For secrets, use AWS Secrets Manager or SSM Parameter Store (never hardcode secrets in repo!).

---

## GCP/Azure Recommendations

- GCP: Use Cloud Run/App Engine for backend, Cloud Storage + CDN for frontend, Firestore for DB.
- Azure: Use Web Apps + Cosmos DB for backend, Static Web Apps for frontend.
