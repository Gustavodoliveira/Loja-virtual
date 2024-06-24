export class Validate {

	isEmail(email: string) {
		const isEmail = /\S+@\S+\.\S+/
		return isEmail.test(email)
	}

	isPassword(password: string): boolean {
		const isPassword = /^(?=.[\w])(?=.[!#@$%&]){6-15}/
	 return isPassword.test(password)
	}
}