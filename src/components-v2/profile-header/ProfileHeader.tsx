import {BellIcon} from '@heroicons/react/outline';

import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import SvgIcon from '@material-ui/core/SvgIcon';
import Typography from '@material-ui/core/Typography';
import {useTheme} from '@material-ui/core/styles';

import {useStyles, ProfileHeaderProps} from '.';
import {BoxComponent} from '../atoms/Box';
import {CustomAvatar, CustomAvatarSize} from '../atoms/avatar';

const ProfileHeader = ({
  name = 'Aaron Ting',
  username = '@aaronting8',
  avatar = 'https://res.cloudinary.com/dsget80gs/icon/Ellipse_445aaron.svg',
}: ProfileHeaderProps): JSX.Element => {
  const theme = useTheme();
  const classes = useStyles();

  //CONSTANTS
  const BORDER_RADIUS = theme.spacing(0, 0, 2.5, 2.5);

  return (
    <div className={classes.root}>
      <BoxComponent radiusStr={BORDER_RADIUS}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}>
          <div style={{position: 'absolute', left: 0, paddingLeft: 15}}>
            <IconButton aria-label="avatar">
              <SvgIcon component={BellIcon} viewBox="0 0 24 24" />
            </IconButton>
          </div>
          <div>
            <Typography variant="h5">{name}</Typography>
            <Typography variant="caption" color="textSecondary">
              {username}
            </Typography>
          </div>
          <div style={{padding: 12}}>
            <CustomAvatar avatar={avatar} size={CustomAvatarSize.MEDIUM} />
          </div>
        </div>
      </BoxComponent>
    </div>
  );
};

export default ProfileHeader;