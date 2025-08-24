export default function handler(req, res) {
  if (req.method === "POST") {
    const { name } = req.body || {};
    res.status(200).json({ message: `Hello, ${name}! Test received.` });
  } else {
    res.status(403).json({ error: "Access Forbidden" });
  }
}

