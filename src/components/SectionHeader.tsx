import { Box, Typography } from '@mui/material';
import { PrimaryColorText } from '../commonStyledComponents';
import Reveal from './Reveal';

const SectionHeader: React.FC<{ text: string; reverse?: boolean }> = ({
  text,
  reverse = false,
}) => {
  let margin = reverse ? { ml: 2 } : { mr: 2 };

  return (
    <Reveal width="100%">
      <Box
        display="flex"
        alignItems="center"
        flexDirection={reverse ? 'row-reverse' : 'inherit'}
      >
        <hr style={{ flexGrow: 1 }} />
        <Typography variant="h2" sx={{ mx: 2 }}>
          {text}
          <PrimaryColorText style={{ fontSize: '68px' }}>.</PrimaryColorText>
        </Typography>
        <hr style={{ flexGrow: 1 }} />
      </Box>
    </Reveal>
  );
};

export default SectionHeader;
