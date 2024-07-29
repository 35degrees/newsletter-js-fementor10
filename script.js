const gridContainer = document.querySelector('.grid-container')
const modal = document.querySelector('.success-container')
const form = document.getElementById('form')
const failureMessage = document.querySelector('.failure')
const input = document.querySelector('input')
const successButton = document.querySelector('.success-btn')
const successMsg = document.querySelector('.success-msg')

window.addEventListener('DOMContentLoaded', () => {
	input.value = ''
})

function onSubmit(e) {
	e.preventDefault()
	const email = document.getElementById('email').value
	validateEmail(email)
}

function validateEmail(email) {
	const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
	if (emailRegex.test(email)) {
		gridContainer.style.display = 'none'
		modal.style.display = 'flex'
		successMsg.innerText = `A confirmation email has been sent to ${email}. Please open it and click the button inside to confirm your subscription. `
	} else {
		failureMessage.style.display = 'block'
		input.classList.add('warning')
	}
}

function resetLanding() {
	modal.style.display = 'none'
	gridContainer.style.display = 'grid'
	input.value = ''
	failureMessage.style.display = 'none'
	input.classList.remove('warning')
	console.log('good')
}

function confirmEmail() {
	const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
	const email = document.getElementById('email').value
	if (emailRegex.test(email)) {
		input.classList.remove('warning')
		failureMessage.style.display = 'none'
	}
}

form.addEventListener('submit', onSubmit)
form.addEventListener('keyup', confirmEmail)

successButton.addEventListener('click', resetLanding)
