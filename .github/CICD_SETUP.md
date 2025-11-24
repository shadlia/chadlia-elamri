# GitHub Actions CI/CD Setup for Render

This repository is configured with GitHub Actions to automatically deploy to Render when you push to the `main` branch.

## Setup Instructions

### 1. Get Your Render Deploy Hook

1. Go to your Render dashboard: https://dashboard.render.com
2. Select your service (chadlia-elamri)
3. Go to **Settings** → **Deploy Hook**
4. Copy the deploy hook URL (it looks like: `https://api.render.com/deploy/srv-xxxxx?key=xxxxx`)

### 2. Add Deploy Hook to GitHub Secrets

1. Go to your GitHub repository
2. Click on **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Name: `RENDER_DEPLOY_HOOK`
5. Value: Paste your Render deploy hook URL
6. Click **Add secret**

### 3. How It Works

Once set up, the workflow will:

1. **Trigger**: Automatically runs when you push to `main` branch
2. **Build**: Installs dependencies and builds your project
3. **Deploy**: Triggers Render deployment via the deploy hook
4. **Monitor**: Check the **Actions** tab in GitHub to see deployment status

## Manual Deployment

If you need to manually trigger a deployment:

```bash
# Push to main branch
git push origin main
```

Or trigger from Render dashboard directly.

## Workflow File

The GitHub Actions workflow is located at:
`.github/workflows/deploy.yml`

## Troubleshooting

- **Deployment not triggering**: Check that the secret `RENDER_DEPLOY_HOOK` is set correctly
- **Build failing**: Check the Actions tab for error logs
- **Render not updating**: Verify the deploy hook URL is correct in Render settings
