import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

import { IProfileProps } from './@interfaces';

export function Profile({
  showProfileData = true,
}: IProfileProps): JSX.Element {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Daniel Soarees</Text>
          <Text color="gray.300" fontSize="small">
            meuemail@gmail.com
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
