const baseUrl = 'http://meps.uz'

function errCheck(res) {
    if (res.ok) {
        return res.json() && res.status
    }

    return Promise.reject(`Ошибка API -> ${res.status} нет почты или текста`)
}

export function sendFeedback({ name, tel, email, company, text }) {
    return fetch(`${baseUrl}/`, {
        method: 'POST',
        headers: {
            // 'Accept': "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, tel, email, company, text }),
    })
        .then((res) => {
            return errCheck(res)
        })
}