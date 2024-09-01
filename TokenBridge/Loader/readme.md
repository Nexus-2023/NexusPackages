## SkeletonLoader Component

`SkeletonLoader` is a customizable React component for creating skeleton loading placeholders. It is designed for use in applications to indicate content loading and improve perceived performance.

### Usage

```jsx
import React from "react"
import { SkeletonLoader } from "nexus-loader"

function App() {
  return (
    <div>
      <SkeletonLoader
        variant="rounded" // Shape of the skeleton, e.g., "rounded", "text", "rectangular"
        width={500} // Width of the skeleton
        height={100} // Height of the skeleton
        LoaderBgColor="lightgray" // Background color for the skeleton
        borderRadius="1rem" // Border radius for rounded skeletons
        ContainerBgColor="white" // Background color for the container
        LoaderForegroundColor="gray" // Foreground color for the skeleton
      />
    </div>
  )
}

export default App
```

### Props

- `variant`: Shape of the skeleton (e.g., `"rounded"`, `"text"`, `"rectangular"`). Default is `"rounded"`.
- `width`: Width of the skeleton in pixels. Default is `500`.
- `height`: Height of the skeleton in pixels. Default is `100`.
- `LoaderBgColor`: Background color of the skeleton loader. Default is `"var(--skeletonLoaderBg)"`.
- `borderRadius`: Border radius for rounded skeletons. Default is `"1rem"`.
- `ContainerBgColor`: Background color of the container holding the skeleton. Default is `"var(--primary)"`.
- `LoaderForegroundColor`: Foreground color of the skeleton loader. Default is `"var(--bg)"`.
