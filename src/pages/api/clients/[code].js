export default function handler(req, res) {
    res.status(200).json({
        id: req.query.code,
        name: `matheus ${req.query.code}`,
        age: 24,
    })
}