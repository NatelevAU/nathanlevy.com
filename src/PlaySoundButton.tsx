import { Box, Button, SvgIcon } from '@mui/material';
import { useState } from 'react';

// import Sound from 'react-sound';
import { ReactComponent as Pause } from './images/icons/Pause.svg';
import { ReactComponent as Play } from './images/icons/Play.svg';

const PlaySoundButton: React.FC<{ isUpgraded: boolean }> = props => {
  // const { isUpgraded } = props;
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <Box pb={5}>
      <Button
        size="large"
        variant="contained"
        startIcon={<SvgIcon> {!isPlaying ? <Play /> : <Pause />} </SvgIcon>}
        onClick={() => setIsPlaying(!isPlaying)}
      >
        {!isPlaying ? 'Play' : 'Pause'}
      </Button>
      {/* <Sound
        url={isUpgraded ? upgradedMusic : music}
        playStatus={isPlaying ? 'PLAYING' : 'STOPPED'}
        playFromPosition={8400}
      /> */}
    </Box>
  );
};

export default PlaySoundButton;
