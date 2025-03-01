import GlassesIcon from 'public/specific/menu/glasses-icon.png';
import SnackIcon from 'public/specific/menu/snack-icon.png';
import SpectatorIcon from 'public/specific/menu/spectator-icon.png';

import { MenuItemInterface } from './MenuItem';

// eslint-disable-next-line import/prefer-default-export
export const MenuItemParms: MenuItemInterface[] = [
    { id: 1, icon: SpectatorIcon, text: 'Sell ticket', onClick: undefined },
    { id: 2, icon: SnackIcon, text: 'Sell snack', onClick: undefined },
    { id: 3, icon: GlassesIcon, text: 'Sell glasses', onClick: undefined },
];
