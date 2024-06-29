import * as dotenv from "dotenv";
import mongoose from "mongoose";

export const connectDatabase = async () => {
	mongoose.set("strictQuery", true);

	const apikey = dotenv.config().parsed.NODE_MONGO_API_KEY;

	return await mongoose.connect(apikey);
};
