import data from './data.json';
import footerData from "./footer.json";

export async function getEmployees() {
  return data.employees
}
export async function getServices() {
  return data.servicesHome
}
export function getFooterLinks() {
  return footerData.footer
}
export function getFullServices() {
  return data.services
}
