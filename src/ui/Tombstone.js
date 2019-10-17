import React from 'react';
import { Instagram, BulletList } from 'react-content-loader';

export function PostTombstone(props) {
  return <Instagram {...props} />;
}

export function CommentsTombstone(props) {
  return <BulletList {...props} />;
}
