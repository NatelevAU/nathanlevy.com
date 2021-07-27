import { Box, Button, SvgIcon } from '@material-ui/core';
import { useState } from 'react';
import Sound from 'react-sound';

import music from './sound/music/RightRound.mp3';

import { ReactComponent as Pause } from './images/icons/Pause.svg';
import { ReactComponent as Play } from './images/icons/Play.svg';

const PlaySoundButton = () => {
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
      <Sound url={music} playStatus={isPlaying ? 'PLAYING' : 'STOPPED'} playFromPosition={8400} />
    </Box>
  );
};

export default PlaySoundButton;
