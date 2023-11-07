const form = document.getElementById('registerForm');

form.addEventListener('submit', e => {
    e.preventDefault();
    const data = new FormData(form);
    const obj = {};
    // {
    //     first_name: "asdasd",
    //     last_name: "asdasd",
    //     age: 123
    // }
    data.forEach((value, key) => obj[key] = value);
    fetch('/api/sessions/register', {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(result => {
        if (result.status === 201) {
            window.location.replace('/');
        }
    })
})