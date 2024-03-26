try {
  rs.status()
} catch (err) {
  rs.initiate({
    _id: 'rs0',
    members: [{ _id: 0, host: process.env.MONGO_REPLICA_SET_HOST + ":27017" }],
  })
}
