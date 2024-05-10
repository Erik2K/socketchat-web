import React from 'react'
import ContentLoader from 'react-content-loader'

const ListedChatSkeleton = () => (
    <ContentLoader
      speed={2}
      width={160}
      height={1000}
      viewBox="0 0 160 1000"
      backgroundColor="#979595"
      foregroundColor="#ecebeb"
    >
      <rect x="82" y="22" rx="3" ry="3" width="88" height="6" />
      <rect x="85" y="50" rx="3" ry="3" width="52" height="6" />
      <circle cx="36" cy="38" r="28" />

      <rect x="82" y="102" rx="3" ry="3" width="88" height="6" />
      <rect x="85" y="130" rx="3" ry="3" width="52" height="6" />
      <circle cx="36" cy="118" r="28" />

      <rect x="82" y="182" rx="3" ry="3" width="88" height="6" />
      <rect x="85" y="210" rx="3" ry="3" width="52" height="6" />
      <circle cx="36" cy="198" r="28" />

      <rect x="82" y="262" rx="3" ry="3" width="88" height="6" />
      <rect x="85" y="290" rx="3" ry="3" width="52" height="6" />
      <circle cx="36" cy="278" r="28" />

      <rect x="82" y="342" rx="3" ry="3" width="88" height="6" />
      <rect x="85" y="370" rx="3" ry="3" width="52" height="6" />
      <circle cx="36" cy="358" r="28" />

      <rect x="82" y="422" rx="3" ry="3" width="88" height="6" />
      <rect x="85" y="450" rx="3" ry="3" width="52" height="6" />
      <circle cx="36" cy="438" r="28" />

      <rect x="82" y="502" rx="3" ry="3" width="88" height="6" />
      <rect x="85" y="530" rx="3" ry="3" width="52" height="6" />
      <circle cx="36" cy="518" r="28" />

      <rect x="82" y="582" rx="3" ry="3" width="88" height="6" />
      <rect x="85" y="610" rx="3" ry="3" width="52" height="6" />
      <circle cx="36" cy="598" r="28" />

      <rect x="82" y="662" rx="3" ry="3" width="88" height="6" />
      <rect x="85" y="690" rx="3" ry="3" width="52" height="6" />
      <circle cx="36" cy="678" r="28" />

      <rect x="82" y="742" rx="3" ry="3" width="88" height="6" />
      <rect x="85" y="770" rx="3" ry="3" width="52" height="6" />
      <circle cx="36" cy="758" r="28" />
    </ContentLoader>
)

export default ListedChatSkeleton
