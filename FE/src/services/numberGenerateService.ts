import { httpReq } from "./base";

const generateSegitiga = async (n:number) => {
  return await httpReq.post(`triangle/${n}`)
}

const generateGanjil = async (n:number) => {
  return await httpReq.post(`ganjil/${n}`)
}

const generatePrima = async (n:number) => {
  return await httpReq.post(`prima/${n}`)
}

export {generateSegitiga, generatePrima, generateGanjil}