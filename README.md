# MongoDB Server Installation by Docker Compose

## 1. Setup `.env` file

## 2. Custom your `config/keyfile` file for Replica Set

```bash
openssl rand -base64 512 > config/keyfile
chmod 400 config/keyfile
```

## 3. Run MongoDB Server

```bash
docker compose up -d
```
