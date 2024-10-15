function submitLogin() {
    const UserName = document.getElementById('username').value;
    const PassWord = document.getElementById('password').value;

    Swal.fire({
        title: 'Logging in...',
        allowOutsideClick: false,
        didOpen: () => {
            Swal.showLoading();
        }
    });

    fetch('https://restapi.tu.ac.th/api/v1/auth/Ad/verify', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Application-Key': 'TU1470aab52d7309bf2a623d00f56fb04f1bd9246edc3727d79a60bdc1cb16ff00d78acee3ee93f915e686a2b4a759a937'
            },
            body: JSON.stringify({ UserName, PassWord })
        })
        .then(response => response.json())
        .then(data => {
            if (data.status) {
                Swal.fire({
                    icon: 'success',
                    title: 'Login Successful',
                    text: 'Redirecting to profile page...',
                    timer: 1000,
                    showConfirmButton: false
                })
            document.getElementById('form-login').classList.add('d-none');
            document.getElementById('form-logout').classList.remove('d-none');
            document.getElementById('message').innerText = `Name: ${data.displayname_en}`;
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Login Failed',
                    text: 'Please check your credentials and try again.'
                });
            }
        })
        .catch(error => {
            console.error('Error:', error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'An error occurred. Please try again later.'
            });
        });
};

function submitLogout() {
    Swal.fire({
        title: 'Logging out...',
        allowOutsideClick: false,
        didOpen: () => {
            Swal.showLoading();
        }
    });
    document.getElementById('form-logout').classList.add('d-none');
    document.getElementById('form-login').classList.remove('d-none');
    document.getElementById('message').innerText = '';
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';

    Swal.fire({
        icon: 'success',
        title: 'Logout Successful',
        text: 'Redirecting to login page...',
        timer: 1000,
        showConfirmButton: false
    });
}