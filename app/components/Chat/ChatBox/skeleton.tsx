import React from 'react'
import ContentLoader from 'react-content-loader'

const ChatBoxSkeleton = () => (
  <div style={{ padding: 10 }}>
    <ContentLoader
      viewBox="0 0 400 240"
      height="100%"
      width="100%"
      backgroundColor="#979595"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="12" rx="3" ry="3" width="70" height="6" />
      <rect x="0" y="29" rx="3" ry="3" width="50" height="6" />

      <rect x="329" y="58" rx="3" ry="3" width="70" height="6" />
      <rect x="349" y="76" rx="3" ry="3" width="50" height="6" />

      <rect x="0" y="104" rx="3" ry="3" width="70" height="6" />
      <rect x="0" y="122" rx="3" ry="3" width="50" height="6" />

      <rect x="329" y="150" rx="3" ry="3" width="70" height="6" />
      <rect x="349" y="168" rx="3" ry="3" width="50" height="6" />

      <rect x="0" y="196" rx="3" ry="3" width="70" height="6" />
      <rect x="0" y="214" rx="3" ry="3" width="50" height="6" />
    </ContentLoader>
  </div>
)

export default ChatBoxSkeleton
