import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import { purple } from '@mui/material/colors';

const ButtonComponent = styled(Button)<ButtonProps>(({ theme }) => ({
    color: 'var(--color-white)',
    backgroundColor: 'var(--color-purple-medium)',
    boxShadow: '0px 30px 60px rgba(141, 139, 139, 0.2)',
    borderRadius: '15px',
    padding: '10px',
    '&:hover': {
      backgroundColor: 'var( --color-purple-dark)',
    },
  }));
  
export default ButtonComponent