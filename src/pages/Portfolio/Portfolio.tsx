import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  CssBaseline,
  IconButton,
  Typography,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React, { useEffect, useMemo, useState } from 'react';
import { animated, useTransition } from 'react-spring';

interface WorkExperience {
  name: string;
  url?: string;
}

interface ResumeData {
  work: WorkExperience[];
}

const theme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#f5f5f5',
    },
    text: {
      primary: '#333333',
    },
  },
});

const Portfolio: React.FC = () => {
  const [resumeData, setResumeData] = useState<ResumeData | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [thumbnails, setThumbnails] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResumeData = async () => {
      try {
        const response = await fetch(
          'https://gist.githubusercontent.com/NatelevAU/944215ecf9961fb974574f511de02632/raw/ac151681a10c7df8d206609d3f6966f0459ffa37/resume.json',
        );
        const data = await response.json();
        setResumeData(data);

        const filteredWork = data.work.filter((job: WorkExperience) => !!job.url);
        const thumbnailPromises = filteredWork.map((job: WorkExperience) =>
          fetch(`https://api.microlink.io?url=${encodeURIComponent(job.url!)}`)
            .then(res => res.json())
            .then(
              data => data.data.image?.url || data.data.logo?.url || '/api/placeholder/300/200',
            ),
        );
        const thumbnailUrls = await Promise.all(thumbnailPromises);
        setThumbnails(thumbnailUrls);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchResumeData().catch(console.error);
  }, []);

  const filteredWork = useMemo(() => {
    return (
      resumeData?.work.filter((job): job is WorkExperience & { url: string } => !!job.url) || []
    );
  }, [resumeData]);

  const transitions = useTransition(currentIndex, {
    from: { transform: 'translateX(0%)' },
    enter: { transform: 'translateX(0%)' },
    leave: { transform: 'translateX(0%)' },
    config: { tension: 300, friction: 30 },
  });

  const handlePrev = () => {
    setCurrentIndex(prevIndex => (prevIndex > 0 ? prevIndex - 1 : filteredWork.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prevIndex => (prevIndex < filteredWork.length - 1 ? prevIndex + 1 : 0));
  };

  const renderCard = (job: WorkExperience, index: number, isCurrent: boolean) => {
    return (
      <Card
        sx={{
          width: isCurrent ? 280 : 220,
          height: isCurrent ? 360 : 300,
          transition: 'all 0.3s ease',
          opacity: isCurrent ? 1 : 0.7,
          transform: isCurrent ? 'scale(1)' : 'scale(0.9)',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <CardMedia
          component="img"
          sx={{
            height: isCurrent ? 200 : 160,
            objectFit: 'contain',
            backgroundColor: '#f0f0f0',
          }}
          image={thumbnails[index]}
          alt={job.name}
        />
        <CardContent
          sx={{
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            p: 1,
          }}
        >
          <Typography variant="subtitle1" gutterBottom align="center">
            {job.name}
          </Typography>
          {job.url && (
            <Button
              variant="outlined"
              size="small"
              href={job.url}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ fontSize: '0.7rem', width: '80%' }}
            >
              Live View
            </Button>
          )}
        </CardContent>
      </Card>
    );
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box>
        <Typography variant="h2" align="center" sx={{ my: 1 }}>
          Things I've worked on
        </Typography>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <IconButton onClick={handlePrev} sx={{ mr: 2 }}>
            <ArrowBackIosNewIcon />
          </IconButton>
          <Box sx={{ position: 'relative', width: 840, height: 360, overflow: 'hidden' }}>
            {transitions((style, i) => (
              <animated.div
                style={{
                  ...style,
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '16px',
                }}
              >
                {renderCard(
                  filteredWork[(i - 1 + filteredWork.length) % filteredWork.length],
                  (i - 1 + filteredWork.length) % filteredWork.length,
                  false,
                )}
                {renderCard(filteredWork[i], i, true)}
                {renderCard(
                  filteredWork[(i + 1) % filteredWork.length],
                  (i + 1) % filteredWork.length,
                  false,
                )}
              </animated.div>
            ))}
          </Box>
          <IconButton onClick={handleNext} sx={{ ml: 2 }}>
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Portfolio;
