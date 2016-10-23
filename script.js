var user = prompt("Login")
switch (user) {
    case null:
        alert("Вход отменён")
        break
    case "Админ":
        var pass=prompt('Password')
        if (pass == "Чёрный Властелин") {
            alert("Добро пожаловать!")
        } else {
            alert("Пароль неверен")
        }
        break
    default:
        alert("Я вас не знаю")


};