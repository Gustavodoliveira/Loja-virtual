import cookieParser from 'cookie-parser';
export class Validate {
	isCookieValid(cookie: string): boolean {
		const isCookieValid = cookieParser.signedCookie(cookie, `${process.env.SECRETCOOKIE}`);

		if(!isCookieValid) return false;

		return true;
	}

	isEmail(email: string) {
		const isEmail = /\S+@\S+\.\S+/;
		return isEmail.test(email);
	}
	
	isPassword(password: string): boolean {
		const isPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/;
		return isPassword.test(password);
	}
}






/* 
/^
  (?=.*\d)              // deve conter ao menos um dígito
  (?=.*[a-z])           // deve conter ao menos uma letra minúscula
  (?=.*[A-Z])           // deve conter ao menos uma letra maiúscula
  (?=.*[$*&@#])         // deve conter ao menos um caractere especial
  [0-9a-zA-Z$*&@#]{8,}  // deve conter ao menos 8 dos caracteres mencionados
$/
*/