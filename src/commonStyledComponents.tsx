import { styled } from '@mui/material';

export const PrimaryColorText = styled('span')(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontWeight: 'bold',
}));
