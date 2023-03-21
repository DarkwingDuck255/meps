const baseUrl = 'http://localhost:3001'

function errCheck(res) {
    if (res.ok) {
        return res.json()
    }

    return Promise.reject(`Ошибка API -> ${res.status}`)
}

export function sendFeedback({ name, email, company, tel, text }) {
    return fetch(`${baseUrl}/`, {
        method: 'POST',
        headers: {
            // 'Accept': "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, company, tel, text })
    })
        .then((res) => {
            return errCheck(res)
        })
}