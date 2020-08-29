export default class RestoService {
  async getMenuItems() {
   const res = await fetch('http://localhost:3001/menu')
    if (!res.ok) {
      throw new Error(`${res.statusText}, ${res.status}`)
    } else {
      return res
    }
  }
}
