# Node Locator

This Node.js app uses the **ZEDEDA REST API** to retrieve the **location data for all edge nodes** and writes the results to a CSV file.

---

## 🚀 Getting Started

Clone the repo and set up the config file:

```bash
git clone https://github.com/krisclarkdev/nodelocator.git
cd nodelocator
vi app.properties
```

### 🔧 Edit the `app.properties` file

Update the following values to match your ZEDEDA Cloud environment:

```properties
URL=https://your.zededa.instance 
TOKEN=your_api_token_here
FILENAME=output.csv 
```

The URL is the hostname and subdomain only, no additional slashes are required

---

## ▶️ Running the App

Run the script with Node:

```bash
node app.js
```

The app will generate a CSV file containing the location data of all your nodes, saved with the name specified in `app.properties`.

---

## 🧪 Notes

This script has been tested in my own ZEDEDA environment, but you may need to make slight modifications to match yours. Feel free to open issues or submit pull requests!

---

## 🤝 Contributing

Contributions are welcome! If you spot improvements or want to add features, just fork the repo and send a PR. 🙌

---

## 📄 License

MIT
