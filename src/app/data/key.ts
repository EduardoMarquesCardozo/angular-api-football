export interface IKey {
    value?: string,
}

export interface ILoginResponse {
	get: string,
	parameters: [],
	errors: {
        token: string;
    },
	results: number,
	response: {
		account: {
			firstname: string,
			lastname: string,
			email: string
		},
		subscription: {
			active: boolean
		}
	}
}