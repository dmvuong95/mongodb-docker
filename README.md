# MongoDB Server Installation by Docker Compose

## 1. Setup `.env` file

## 2. Custom your `config/keyfile` file for Replica Set

```bash
openssl rand -base64 512 > config/keyfile
chmod 400 config/keyfile
sudo chown -R 999:999 config/keyfile
```

## 3. Change owner of `data` and `log` dir

```bash
sudo chown -R 999:999 data/
sudo chown -R 999:999 log/
```

## 4. Run MongoDB Server

```bash
sudo docker compose up -d
```

## 5. Initialize Replica Set

- Run the following command to initialize the replica set:
  ```bash
  source .env
  sudo docker compose exec -it master-node mongo /etc/mongo/rs-init.js -u "$MONGO_INITDB_ROOT_USERNAME" -p "$MONGO_INITDB_ROOT_PASSWORD"
  ```

- Append value of the `$EXPOSED_IP` and `$MONGO_REPLICA_SET_HOST` environments to `/etc/hosts` of docker host machine:
  ```
  source .env
  echo "$EXPOSED_IP $MONGO_REPLICA_SET_HOST" | sudo tee -a /etc/hosts
  ```
