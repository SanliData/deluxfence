# DeluxFences — DigitalOcean Production Deployment

**Repo:** https://github.com/SanliData/deluxfence  
**Domain:** deluxfences.com  
**Server:** Ubuntu 24.04 · PM2 · Nginx · Let's Encrypt · Cloudflare DNS

---

## 1. Node.js 20

```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
node -v   # v20.x
npm -v
```

---

## 2. App directory & clone

```bash
sudo mkdir -p /var/www/deluxfence
sudo chown $USER:$USER /var/www/deluxfence
cd /var/www/deluxfence
git clone https://github.com/SanliData/deluxfence.git .
```

---

## 3. Install dependencies & build

```bash
npm install
npm run build
```

---

## 4. PM2 setup

```bash
sudo npm install -g pm2
pm2 start ecosystem.config.cjs
pm2 save
pm2 startup   # run the command it prints to enable on boot
```

**Useful commands:**  
`pm2 status` · `pm2 logs deluxfences` · `pm2 restart deluxfences`

---

## 5. Nginx reverse proxy

Install Nginx if needed:

```bash
sudo apt update
sudo apt install -y nginx
```

Create site config:

```bash
sudo nano /etc/nginx/sites-available/deluxfences.com
```

Paste (replace `deluxfences.com` with your domain if different):

```nginx
server {
    listen 80;
    server_name deluxfences.com www.deluxfences.com;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable and reload:

```bash
sudo ln -s /etc/nginx/sites-available/deluxfences.com /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

---

## 6. SSL with Certbot (Let's Encrypt)

```bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d deluxfences.com -d www.deluxfences.com
```

Follow prompts. Auto-renewal:

```bash
sudo certbot renew --dry-run
```

---

## 7. Update routine (after code changes)

On the server:

```bash
cd /var/www/deluxfence
git pull origin main
npm install
npm run build
pm2 restart deluxfences
```

Or use the GitHub Actions auto-deploy (see repo `.github/workflows/deploy.yml`) with SSH secrets configured.

---

## 8. Cloudflare DNS

- Add A record: `@` → droplet IP  
- Add A or CNAME: `www` → droplet IP or `deluxfences.com`  
- SSL/TLS mode: **Full (strict)** if using Let's Encrypt on the droplet  
- Optional: proxy (orange cloud) for DDoS/cache

---

## Checklist

- [ ] Node 20 installed  
- [ ] App in `/var/www/deluxfence`, `npm install` & `npm run build`  
- [ ] PM2 running `deluxfences`, `pm2 save` & `pm2 startup`  
- [ ] Nginx proxy to `http://127.0.0.1:3000`  
- [ ] Certbot SSL for `deluxfences.com` and `www`  
- [ ] DNS (Cloudflare) pointing to droplet  
- [ ] GitHub Secrets set for auto-deploy (optional)
