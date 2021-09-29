export default function client(req, res) {

    if (req.method == "GET") {
        handleGet(req, res)
    }
    else {
        res.status(405).send()
    }
}

function handleGet(req, res) {
    res.status(200).json({
        id: 5,
        name: req.query.name || null,
        age: parseInt(req.query.age) || null,
    })
}