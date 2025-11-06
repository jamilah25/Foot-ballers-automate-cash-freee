## Environment propagation

- Set API URL (backend) in client `.env` as `REACT_APP_API_URL`
- In backend, use CORS to allow frontend domain.
- For cloud deployments (AWS EB, Google App Engine, Azure), set ENV vars in the respective dashboard:
  - API keys, DB URIs, secrets, etc.

## Cloud-native tips

- Separate client and backend repos or folders.
- For AWS, use Elastic Beanstalk (backend), S3+CloudFront (frontend static), Route 53 for DNS, ACM for certs.
- For GCP, use App Engine or Cloud Run (backend), Firebase Hosting (frontend).
- For Azure, use Web Apps (backend), Static Web Apps (frontend).
- Use secrets managers for sensitive config.
- Always use HTTPS for production endpoints.