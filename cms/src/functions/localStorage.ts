export default class LocalStorage {
	static onSave(key: string, value: string) {
		localStorage.setItem(key, JSON.stringify(value))
	}

	static onLoad(key: string) {
		const data = localStorage.getItem(key)
		return JSON.parse(<string>data)
	}
}