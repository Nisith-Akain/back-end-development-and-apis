const fs = require("fs");

async function main() {
    const data = await fs.promises.readFile("assets/poem.txt", { encoding: "utf8" });
    console.log(data)
}

main();
fs.writeFileSync("assets/output.txt", "Hello, freeCodeCamp!");
fs.appendFileSync("assets/output.txt", "\ntttyler");
const exist = fs.existsSync("assets/output.txt"); 
console.log(exist)
const entries = fs.readdirSync("assets"); 
console.log(entries); 
const Buf = Buffer.from("Hello, Node!"); 
console.log(Buf); 
console.log(Buf.toString('hex'));
console.log(Buf.toString('base64')); 
const buf2 = Buffer.alloc(8, 0xff);
console.log(buf2);
const decoded = Buffer.from("ZnJlZUNvZGVDYW1w", "base64").toString("utf8");
console.log(decoded);
const crypto = require("crypto");
const hash = crypto.createHash("sha256").update("freeCodeCamp").digest("hex");
console.log(hash);
const randomCrpto = crypto.randomBytes(16).toString("hex"); 
console.log(randomCrpto); 
const randomUUID = crypto.randomUUID(); 
console.log(randomUUID);
const os = require("os"); 
console.log(os.platform()); 
console.log(os.arch()); 
console.log(os.hostname()) 
console.log(os.totalmem())
console.log(os.freemem())

console.log(os.uptime())
console.log(os.cpus().length)

const path = require("path");
const filePath = path.join(__dirname, "assets", "poem.txt");
console.log(filePath);
console.log(path.basename(filePath));
console.log(path.dirname(filePath));
console.log(path.extname(filePath));
console.log(path.join('assets', '..', 'server.js'));
console.log(path.resolve('assets', '..', 'server.js'));

console.log(path.parse(filePath)); 

console.log(process.version);
console.log(process.platform);
console.log(process.env.NODE_ENV);

console.log(process.argv); 
process.stdout.write('Hello from stdout\n');
process.stderr.write('Hello from stderr\n');
process.stdout.write("Hello from stdout\n"); 

const readable = fs.createReadStream("assets/poem.txt");
const writable = fs.createWriteStream("assets/stream-output.txt");

readable.pipe(writable);

