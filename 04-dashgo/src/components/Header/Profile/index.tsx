import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

import { IProfileProps } from './@interfaces';

export function Profile({
  showProfileData = true,
}: IProfileProps): JSX.Element {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Daniel Soares</Text>
          <Text color="gray.300" fontSize="small">
            danielmail@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Daniel Soares"
        src=""
      />
    </Flex>
  );
}
