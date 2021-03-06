import CreateCustomerScreen from '../../screens/Customers/CreateCustomerScreen';
import ListCustomersScreen from '../../screens/Customers/ListCustomersScreen';

import { IRoute } from '../../types/types';

const CUSTOMER_ROUTES: IRoute[] = [
  {
    name: 'CreateCustomerScreen',
    options: {
      headerTitle: 'CADASTRAR CLIENTE',
      drawerLabel: 'CADASTRAR CLIENTE',
    },
    component: CreateCustomerScreen,
  },
  {
    name: 'ListCustomersScreen',
    options: {
      headerTitle: 'CLIENTES',
      drawerLabel: 'CLIENTES',
    },
    component: ListCustomersScreen,
  },
];

export default CUSTOMER_ROUTES;
