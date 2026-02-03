# Restore Default Data - Instructions

## What This Does

This script restores the original static/default data for:
- **Contact Addresses** (5 regions: India HQ, Middle East, North America, Europe, Asia-Pacific)
- **Integrations** (4 integration categories with descriptions)
- **Connectors** (3 sliders with connector items)

## How to Run

1. **Make sure your database is running and `.env` file has `DATABASE_URL`**

2. **Run the restore script:**
   ```bash
   cd /Users/sumeshkk/Documents/bpract/git-desktop/cloud-next
   node scripts/restore-default-data.js
   ```

3. **The script will:**
   - Check if data already exists (to avoid duplicates)
   - Create missing contact addresses
   - Create missing integrations
   - Create missing connectors grouped by slider

## What Data Will Be Restored

### Contact Addresses (5 items)
1. **India HQ** - Kozhikode Campus
   - Address: Unit 1A, 4th floor, KSITIL, Special Economic Zone, Cyberpark Campus, Sahya building, Nillikkode P.O
   - Phones: +91 9567 728 766, +91 85901 37114
   - Email: support@cloudmlmsoftware.com
   - WhatsApp: +91 85901 37114

2. **Middle East** - Dubai & Abu Dhabi
   - Address: Office 904, Al Thuraya Tower, Dubai Internet City, Dubai
   - Phones: +971 4 580 4533
   - Email: mea@cloudmlmsoftware.com
   - WhatsApp: +971 4 580 4533

3. **North America** - San Francisco & Toronto
   - Address: 795 Folsom St, San Francisco, CA, 120 Adelaide St W, Toronto, ON
   - Phones: +1 415 968 9704, +1 437 747 2224
   - Email: na@cloudmlmsoftware.com
   - WhatsApp: +1 415 968 9704

4. **Europe** - London & Frankfurt
   - Address: 90 High Holborn, London, Taunusanlage 8, Frankfurt
   - Phones: +44 20 3289 7320
   - Email: europe@cloudmlmsoftware.com
   - WhatsApp: +44 20 3289 7320

5. **Asia-Pacific** - Singapore & Sydney
   - Address: 8 Marina View, Asia Square, 45 Clarence St, Sydney
   - Phones: +65 3165 0891, +61 2 7909 3220
   - Email: apac@cloudmlmsoftware.com
   - WhatsApp: +65 3165 0891

### Integrations (4 items)
1. **Payments and Settlement**
   - Icon: CreditCard
   - Description: Pre-built connectors for banks, PayPal, Stripe, and global pay-out partners to deliver commissions globally.
   - Connectors: Stripe, PayPal, Square, Razorpay, Authorize.Net

2. **CRM and E-commerce**
   - Icon: Users
   - Description: Integrate Shopify, WooCommerce, Magento, Salesforce, HubSpot, and custom portals for single source of truth.
   - Connectors: Shopify, WooCommerce, Magento, Salesforce, HubSpot

3. **Tax and Compliance**
   - Icon: Shield
   - Description: Sync GST engines, e-invoicing solutions, and statutory reporting platforms without duplicate entry.
   - Connectors: QuickBooks, Zoho Desk, AWS SES

4. **Analytics and Data Lake**
   - Icon: BarChart
   - Description: Stream demo and production metrics into Power BI, Tableau, Snowflake, or BigQuery for advanced modelling.
   - Connectors: Meta Pixel, Zapier, Twilio

### Connectors (3 sliders)

**Slider 1: Payment Gateways**
- Stripe payouts
- PayPal
- Razorpay
- Square

**Slider 2: CRM & Business Tools**
- Salesforce
- HubSpot
- QuickBooks
- Zoho Desk

**Slider 3: E-commerce & Marketing**
- Shopify
- WooCommerce
- Meta Pixel
- AWS SES
- Twilio
- Zapier

## Verification

After running the script, verify the data:

1. **Check Contact Addresses:**
   - Visit: `http://localhost:3000/admin/contact`
   - You should see 5 contact addresses

2. **Check Integrations:**
   - Visit: `http://localhost:3000/admin/integration`
   - You should see 4 integrations

3. **Check Connectors:**
   - Visit: `http://localhost:3000/admin/integration`
   - Click on "Connectors" tab
   - You should see 3 sliders with connector items

## Notes

- The script checks for existing data to avoid duplicates
- All data is created with `locale: "en"` (English)
- You can add translations later through the admin interface
- The script uses simple ID generation (no external dependencies)

## Troubleshooting

If you get "Environment variable not found: DATABASE_URL":
- Make sure your `.env` file exists and has `DATABASE_URL` set
- The script needs database access to restore data

If you get "Table does not exist" errors:
- Run `npx prisma db push` first to create the tables
- Then run the restore script
