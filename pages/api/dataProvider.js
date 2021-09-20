import employees from './data.json';
import footerData from "./footer.json";

export async function getEmployees() {
  return employees.employees
}
export async function getServices() {
  return employees.services
}
export function getFooterLinks() {
  return footerData.footer
}
