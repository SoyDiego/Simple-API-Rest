import "@babel/polyfill";
import connectDB from "./database";

import app from "./server";

connectDB()

app.listen(app.get("port"), () => {
	console.log("Server on port", app.get("port"));
})