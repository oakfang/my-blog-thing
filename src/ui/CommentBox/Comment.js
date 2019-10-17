import React, { useMemo } from 'react';
import { Flex, Box } from 'reflexbox';
import { Typography } from '@material-ui/core';
import { convertFromRaw } from 'draft-js';
import { stateToHTML } from 'draft-js-export-html';

import { Avatar } from 'ui/Avatar';
import { FormattedDate } from 'ui/FormattedDate';
import { TextBubble } from 'ui/TextBubble';

export function Comment({ comment }) {
  const commentHtml = useMemo(
    () => stateToHTML(convertFromRaw(comment.content)),
    [comment]
  );
  return (
    <Flex width="100%" flexDirection="column" alignItems="flex-end" mb="10px">
      <Flex width="100%">
        <Box width="50px">
          <Avatar email={comment.author} size={30} />
        </Box>
        <TextBubble
          flex={1}
          dangerouslySetInnerHTML={{ __html: commentHtml }}
        />
      </Flex>
      <Typography variant="body2">
        <FormattedDate date={comment.posted} />
      </Typography>
    </Flex>
  );
}
