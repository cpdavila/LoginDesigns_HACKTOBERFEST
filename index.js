import { createServer } from "node:http";
import dotenv from "dotenv";
import fs from "fs";
dotenv.config();

const port = process.env.PORT;
const html = fs.readFileSync("./src/login-1.html");

const server = createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write(html);
  res.end();
});

console.log(`The site is listening the port: ${port}`);

server.listen(port);
