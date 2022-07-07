import { defaultOptions } from '.';

import CreateCustomerScreen from '../screens/Customers/CreateCustomerScreen';
import ListCustomersScreen from '../screens/Customers/ListCustomersScreen';

import { IRoute } from '../types/types';

const CUSTOMER_ROUTES: IRoute[] = [
  {
    name: 'CreateCustomer',
    options: { ...defaultOptions, headerTitle: 'Cadastrar cliente' },
    component: CreateCustomerScreen,
  },
  {
    name: 'ListCustomers',
    options: { ...defaultOptions, headerTitle: 'Clientes' },
    component: ListCustomersScreen,
  },
];

export default CUSTOMER_ROUTES;
