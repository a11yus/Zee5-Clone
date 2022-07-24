import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
    Icon
  } from '@chakra-ui/react'
  import { DragHandleIcon } from '@chakra-ui/icons';
function MoreOption()
{
    return (
        <Menu>
        <MenuButton as={Button} variant='ghost' pl='3rem' size='sm'>
        <Icon as={DragHandleIcon} w={25} h={25} color='white' />
        </MenuButton>
        <MenuList bg='#0f0617' color='#7b767f'>
            <MenuItem>Web Series</MenuItem>
            <MenuItem>News</MenuItem>
            <MenuItem>Eduauraa</MenuItem>
            <MenuItem>Premium</MenuItem>
            <MenuItem>Live TV</MenuItem>
            <MenuItem>Music</MenuItem>
            <MenuItem>ZEEPLEX</MenuItem>
            <MenuItem>Play</MenuItem>
            <MenuItem>Articles</MenuItem>
            <MenuItem>Kids</MenuItem>
            <MenuItem>Videos</MenuItem>
            <MenuItem>Stories</MenuItem>
        </MenuList>
    </Menu>
    )
}

export default MoreOption;