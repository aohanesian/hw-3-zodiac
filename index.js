let dayOfBirth = prompt("Day of birth")
let monthOfBirth = prompt("Month of birth")
let yearOfBirth = prompt("Year of birth")
let firstName = prompt("Your name")
let lastName = prompt("Your last name")
const currentYear = 2022
let age = currentYear - yearOfBirth

dayOfBirth = Number(dayOfBirth)
monthOfBirth = Number(monthOfBirth)
yearOfBirth = Number(yearOfBirth)
age = Number(age)

let check = yearOfBirth / 400
let check2 = (yearOfBirth / 100)
let check3 = (yearOfBirth / 4)

let leapText
if (Number.isInteger(check) || !Number.isInteger(check2) && Number.isInteger(check3))
    leapText = "(leap year)"
else leapText = ""

let zodiacTitle
switch (monthOfBirth) {
    case 1:
        if (dayOfBirth <= 20 || dayOfBirth >= 18)
            zodiacTitle = "Aquarius ♒"
        break
    case 2:
        if (dayOfBirth <= 19 || dayOfBirth >= 20)
            zodiacTitle = "Pisces ♓"
        break
    case 3:
        if (dayOfBirth <= 21 || dayOfBirth >= 19)
            zodiacTitle = "Aries ♈"
        break
    case 4:
        if (dayOfBirth <= 20 || dayOfBirth >= 20)
            zodiacTitle = "Taurus ♉"
        break
    case 5:
        if (dayOfBirth <= 21 || dayOfBirth >= 20)
            zodiacTitle = "Gemini ♊"
        break
    case 6:
        if (dayOfBirth <= 21 || dayOfBirth >= 22)
            zodiacTitle = "Cancer ♋"
        break
    case 7:
        if (dayOfBirth <= 23 || dayOfBirth >= 22)
            zodiacTitle = "Leo ♌"
        break
    case 8:
        if (dayOfBirth <= 23 || dayOfBirth >= 22)
            zodiacTitle = "Virgo ♍"
        break
    case 9:
        if (dayOfBirth <= 23 || dayOfBirth >= 22)
            zodiacTitle = "Libra ♎"
        break
    case 10:
        if (dayOfBirth <= 23 || dayOfBirth >= 21)
            zodiacTitle = "Scorpio ♏"
        break
    case 11:
        if (dayOfBirth <= 22 || dayOfBirth >= 21)
            zodiacTitle = "Sagittarius ♐"
        break
    case 12:
        if (dayOfBirth <= 22 || dayOfBirth >= 19)
            zodiacTitle = "Capricorn ♑"
        break
    default:
        console.log("default switch")
}

if (leapText === "(leap year)")
console.log("User Bio:", firstName, lastName, age, leapText, zodiacTitle)
else console.log("User Bio:", firstName, lastName, age, zodiacTitle)
