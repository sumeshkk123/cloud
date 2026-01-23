# Local PostgreSQL Setup Guide (Without Docker)

## Step-by-Step Setup

### Step 1: Create `.env` File

Create a `.env` file in the root directory (`/Users/sumeshkk/Documents/bpract/git-desktop/cloud-next/.env`) with the following content:

```env
# Database Configuration (Local PostgreSQL)
# Replace postgres:postgres with your actual PostgreSQL username and password
# If using default PostgreSQL installation, username is usually 'postgres'
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/cloud_mlm?schema=public"

# NextAuth Configuration
# IMPORTANT: Change port 3002 to match your actual dev server port
NEXTAUTH_URL="http://localhost:3002"
NEXTAUTH_SECRET="tUkhg7uEzZGuHVGY41OWivmFs4VslPqnw9jSqSTxoMo="

# Next.js Configuration
# IMPORTANT: Change port 3002 to match your actual dev server port
NEXT_PUBLIC_SERVER_URL="http://localhost:3002"
NODE_ENV="development"
```

**Important:**
- Replace `postgres:postgres` with your actual PostgreSQL credentials if different
- The database name `cloud_mlm` should match what you create in pgAdmin (or use your existing database name)

### Step 2: Create Database in pgAdmin

You already have pgAdmin open with servers visible. Follow these steps:

#### Option A: Create in existing server (e.g., "cloud-mlm")

1. **Expand your server** (click the arrow next to "cloud-mlm" or "business_mlm")
2. **Right-click on "Databases"** → **Create** → **Database...**
3. In the dialog:
   - **General tab:**
     - **Database:** `cloud_mlm` (or your existing database name)
   - **Owner tab:**
     - **Owner:** Select `postgres` (or your PostgreSQL superuser)
   - Click **Save**

#### Option B: Create using SQL Query Tool

1. **Right-click your server** (e.g., "cloud-mlm") → **Query Tool**
2. Run this SQL:
   ```sql
   CREATE DATABASE cloud_mlm
     WITH OWNER = postgres
          ENCODING = 'UTF8'
          TEMPLATE = template0;
   ```
   
   **Note:** If you already created the database `cloud_mlm`, you can skip this step.
3. Click **Execute** (or press F5)

### Step 3: Verify Database Connection

In pgAdmin, verify the database exists:
- Expand **Databases** → You should see `cloud_mlm` listed

### Step 4: Install Dependencies (if not done)

```bash
npm install
```

### Step 5: Generate Prisma Client

```bash
npm run db:generate
```

This creates the Prisma client based on your schema.

### Step 6: Push Database Schema

This creates all tables in your database:

```bash
npm run db:push
```

This will create all tables:
- `users`
- `faqs`
- `global_settings`
- `homepage_content`
- `blog_posts`
- `contact_submissions`
- `features`
- `mlm_plans`
- `modules`
- `services`
- `testimonials`
- And more...

### Step 7: Create Admin User

Create your first admin user:

```bash
npm run create-admin-user admin@example.com cloudadmind123 "Admin User"
```

Replace:
- `admin@example.com` with your email
- `AdminPassword123` with your password
- `"Admin User"` with your name

### Step 8: Start Development Server

```bash
npm run dev
```

The app will be available at: `http://localhost:3000`

### Step 9: Access Admin Panel

1. Open: `http://localhost:3000/admin/login`
2. Login with the credentials from Step 7

---

## Troubleshooting

### Database Connection Error

If you get connection errors:

1. **Check PostgreSQL is running:**
   ```bash
   # macOS
   brew services list | grep postgresql
   
   # Or check the process
   ps aux | grep postgres
   ```

2. **Verify credentials in `.env`:**
   - Make sure username and password are correct
   - Check if PostgreSQL is using a different port (default is 5432)

3. **Test connection manually:**
   ```bash
   psql -U postgres -h localhost -p 5432 -d cloud_mlm
   ```

### "Database does not exist" Error

Make sure you created the database `cloud_mlm` in pgAdmin (Step 2), or update the `DATABASE_URL` in `.env` to match your existing database name.

### "User authentication failed" Error

Check your `.env` file - the username and password in `DATABASE_URL` must match your PostgreSQL credentials.

---

## Quick Checklist

- [ ] Created `.env` file with correct `DATABASE_URL` and `NEXTAUTH_SECRET`
- [ ] Verified `cloud_mlm` database exists in pgAdmin (or created it)
- [ ] Installed dependencies (`npm install`)
- [ ] Generated Prisma client (`npm run db:generate`)
- [ ] Pushed database schema (`npm run db:push`)
- [ ] Created admin user (`npm run create-admin-user`)
- [ ] Started dev server (`npm run dev`)
- [ ] Logged into admin panel at `/admin/login`

---

## Next Steps After Setup

Once everything is working:
- Access admin dashboard: `http://localhost:3000/admin`
- Start managing content (FAQs, blog posts, settings, etc.)
- Later, you can set up Docker if needed
