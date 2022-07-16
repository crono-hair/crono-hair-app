import CalendarScreen from '../../screens/Schedule/CalendarScreen';

import { IRoute } from '../../types/types';

const SCHEDULE_ROUTES: IRoute[] = [
  {
    name: 'CalendarScreen',
    options: {
      headerTitle: 'AGENDA',
      drawerLabel: 'AGENDA',
    },
    component: CalendarScreen,
  },
];

export default SCHEDULE_ROUTES;
