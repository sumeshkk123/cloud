# Business MLM Contact Submissions Integration

Cloud MLM admin contact submissions page shows enquiries from both Cloud MLM and Business MLM.

## Environment Variables

### Cloud MLM (cloud-next)

Add to `.env`:

```
BUSINESS_MLM_API_URL=https://your-business-mlm-domain.com
BUSINESS_MLM_API_SECRET=your-shared-secret-key
```

### Business MLM (businessmlmsoftware-com-next)

Add to `.env`:

```
CONTACT_EXTERNAL_API_SECRET=your-shared-secret-key
```

**Important:** Use the **same secret** for both `BUSINESS_MLM_API_SECRET` (Cloud MLM) and `CONTACT_EXTERNAL_API_SECRET` (Business MLM).

Generate a secure key:
```bash
openssl rand -base64 32
```

## Notes

- **View** works for both Cloud MLM and Business MLM submissions
- **Update notes** and **Delete** work only for Cloud MLM submissions (Business MLM rows are read-only in this view)
- Business MLM submissions are prefixed with `bm-` to avoid ID collisions

## Local Testing

When testing with both apps on your machine, set in Cloud MLM `.env`:

```
BUSINESS_MLM_API_URL="http://localhost:3001"
```

Run Business MLM on port 3001: `npm run dev -- -p 3001`

## Troubleshooting

**Business MLM submissions not showing?**

1. **Check Cloud MLM server console** – In development, look for `[Contact API]` messages when loading the contact submissions page.
2. **Verify Business MLM is deployed** – The external API (`/api/admin/contact/external`) must exist on the Business MLM server. Deploy the latest businessmlmsoftware-com-next code.
3. **Verify production env** – On Business MLM production, ensure `CONTACT_EXTERNAL_API_SECRET` is set (same value as Cloud MLM’s `BUSINESS_MLM_API_SECRET`).
4. **Test the external API** – With the API key in a header:  
   `curl -H "X-API-Key: YOUR_SECRET" https://businessmlmsoftware.com/api/admin/contact/external`  
   You should get JSON with contact submissions.
