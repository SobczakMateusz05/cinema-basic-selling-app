import ShowingIcon from 'public/specific/menu/showing-icon.png';
import FilmIcon from 'public/specific/menu/film-icon.png';
import GlassesIcon from 'public/specific/menu/glasses-icon.png';
import SnackIcon from 'public/specific/menu/snack-icon.png';
import SpectatorIcon from 'public/specific/menu/spectator-icon.png';

import { MenuItemProps } from './MenuItem';

// eslint-disable-next-line import/prefer-default-export
export const MenuItemParms: MenuItemProps[] = [
    { id: 0, icon: SpectatorIcon, text: 'Spectators', onClick: undefined },
    { id: 1, icon: SnackIcon, text: 'Snacks', onClick: undefined },
    { id: 2, icon: GlassesIcon, text: 'Glasses', onClick: undefined },
    { id: 3, icon: ShowingIcon, text: 'Showings', onClick: undefined },
    { id: 4, icon: FilmIcon, text: 'Films', onClick: undefined },
];
