const loginButton = document.getElementById('login')
loginButton.addEventListener('click', function () {

    const userForm = document.forms['userForm']
    const userNameElement = userForm.username
    const passwordElement = userForm.password
    const isValidUserName = validateUsername(userNameElement.value)
    const isValidPassword = validatePassword(passwordElement.value)
    if (isValidUserName && isValidPassword) {
        alert('Form is valid')
    }
})

function validateUsername(userName) {
    if (userName) {
        if (userName.search(/[^a-zA-Z]+/) === -1) {
            showInvalidUsernameErrorMessage()
            showEmptyUsernameErrorMessage()
            return true
        } else {
            showInvalidUsernameErrorMessage('block')
            showEmptyUsernameErrorMessage()
        }
    }else {
        document.getElementById('emptyUsername').style.display = 'block'
        showInvalidUsernameErrorMessage()
    }
    return false
}
function validatePassword(passwordValue) {
        if (passwordValue) {
            if((/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/).test(passwordValue)) {
                document.getElementById('invalidPassword').style.display = 'none'
                document.getElementById('emptyPassword').style.display = 'none'
                return true
            } else {
                document.getElementById('invalidPassword').style.display = 'block'
            document.getElementById('emptyPassword').style.display = 'none'
            }
        } else {
            document.getElementById('emptyPassword').style.display = 'block'
            document.getElementById('invalidPassword').style.display = 'none'
        }
        return false
}
function showInvalidUsernameErrorMessage (styleVal = 'none') {
    document.getElementById('invalidUsername').style.display = styleVal
}
function showEmptyUsernameErrorMessage() {
    document.getElementById('emptyUsername').style.display = 'none'
}