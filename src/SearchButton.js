import { styled } from '@nextui-org/react';

export const SearchButton = styled('button', {
    // reset button styles
    background: 'transparent',
    border: 'none',
    padding: 0,
    margin: 0,
    // styles
    width: '24px',
    margin: '0 10px',
    dflex: 'center',
    bg: 'none',
    borderRadius: '$rounded',
    cursor: 'pointer',
    transition: 'opacity 0.25s ease 0s, transform 0.25s ease 0s',
    svg: {
        size: '100%',
        padding: '4px',
        transition: 'transform 0.25s ease 0s, opacity 200ms ease-in-out 50ms',
        boxShadow: '0 5px 20px -5px rgba(0, 0, 0, 0.1)',
        color: 'white'
    },
    '&:hover': {
        opacity: 0.8
    },
    '&:active': {
        transform: 'scale(0.9)'
    }
});

export default SearchButton