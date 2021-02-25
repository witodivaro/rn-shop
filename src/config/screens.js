import HomeScreen from '../screens/home/home.component';
import ItemDetailsScreen from '../screens/item-details/item-details.component';

const SCREENS = {
  Home: {
    name: 'Home',
    key: 'homeScreen',
    component: HomeScreen,
  },
  ItemDetails: {
    name: 'ItemDetails',
    key: 'itemDetails',
    component: ItemDetailsScreen,
  },
};

export default SCREENS;
