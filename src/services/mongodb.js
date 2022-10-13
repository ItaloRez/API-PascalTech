import mongoose from "mongoose";

export default {
  connect() {
    // DB settings
    const user = process.env.DATABASE_USER;
    const password = process.env.DATABASE_PASSWORD;
    // const databaseName = process.env.DATABASE_NAME;
    const host = process.env.DATABASE_HOST;
    const uri = `mongodb+srv://${user}:${password}@${host}/?retryWrites=true&w=majority`;
    return mongoose.connect(uri, {
      // Configurações de conexão
    });
  },
  disconnect() {
    return mongoose.disconnect();
  },
};
