import React from 'react'
import ContentLoader from 'react-content-loader'

const ListedChatSkeleton = () => (
    <ContentLoader
      speed={2}
      width={160}
      height={80}
      viewBox="0 0 160 80"
      backgroundColor="#979595"
      foregroundColor="#ecebeb"
    >
      <rect x="82" y="22" rx="3" ry="3" width="88" height="6" />
      <rect x="85" y="50" rx="3" ry="3" width="52" height="6" />
      <circle cx="36" cy="38" r="28" />
    </ContentLoader>
)

export default ListedChatSkeleton
