import React from 'react';
import cx from 'classnames';

import iconFacebook from 'assets/svg/social/facebook-white.svg';
import iconTwitter from 'assets/svg/social/twitter-white.svg';
import iconInstagram from 'assets/svg/social/instagram-white.svg';
import iconStoreApple from 'assets/svg/store/app-store.svg';
import iconStorePlay from 'assets/svg/store/play-store.svg';
import iconStoreWindows from 'assets/svg/store/windows-store.svg';

// NOTE: Should have used svg sprite but got no time
// <svg className={style} aria-hidden="true">
//   <use xlinkHref={`sprite.svg#${props.id}`} />
// </svg>

const StIcon = ({ id, className, alt }) => {
  const styles = cx(
    'st-icon',
    className ? className : ''
  );
  return (
    <span className={ styles }>
      <img src={
        id === 'facebook' && iconFacebook ||
        id === 'twitter' && iconTwitter ||
        id === 'instagram' && iconInstagram ||
        id === 'app' && iconStoreApple ||
        id === 'play' && iconStorePlay ||
        id === 'windows' && iconStoreWindows
      }
        alt={ alt ? alt : id }
      />
    </span>
  )
};

export default StIcon;
