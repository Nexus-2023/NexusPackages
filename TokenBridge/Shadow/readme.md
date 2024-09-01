## CircleShadow Component

`CircleShadow` is a customizable React component that creates a circular shadow effect, suitable for enhancing the background or adding decorative elements to your web applications.

### Usage

```jsx
import React from "react"
import { CircleShadow } from "nexus-shadow"

function App() {
  return (
    <div>
      <CircleShadow
        color="rgba(0, 0, 0, 0.5)" // Color of the shadow
        height="38rem" // Height of the shadow
        width="40rem" // Width of the shadow
        opacity={40} // Opacity of the shadow (0-100)
        blur="4rem" // Blur intensity for the shadow
        rounded="50%" // Border radius to define the shape (circle by default)
      />
    </div>
  )
}

export default App
```

### Props

- `color`: Color of the shadow. Default is `"var(--circle-shadow)"`.
- `height`: Height of the shadow. Default is `"38rem"`.
- `width`: Width of the shadow. Default is `"40rem"`.
- `opacity`: Opacity level of the shadow (0-100). Default is `40`.
- `blur`: Blur intensity for the shadow. Default is `"4rem"`.
- `rounded`: Border radius for the shadow shape. Default is `"50%"` (circle).
