import GlassesIcon from 'public/specific/menu/glasses-icon.png';
import SnackIcon from 'public/specific/menu/snack-icon.png';
import SpectatorIcon from 'public/specific/menu/spectator-icon.png';

import { MenuItemProps } from './MenuItem';

// eslint-disable-next-line import/prefer-default-export
export const MenuItemParms: MenuItemProps[] = [
    { id: 0, icon: SpectatorIcon, text: 'Sell ticket', onClick: undefined },
    { id: 1, icon: SnackIcon, text: 'Sell snack', onClick: undefined },
    { id: 2, icon: GlassesIcon, text: 'Sell glasses', onClick: undefined },
];
