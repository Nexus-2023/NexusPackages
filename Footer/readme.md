# nexusfooter

The `nexusfooter` package is a customizable and responsive footer component for React applications. It provides a flexible structure to include links, social media icons, and other footer content, making it easy to integrate into any project.

## Features

- **LinkItem**: A versatile link component that supports icons, text, and customizable targets.
- **AnimatedLink**: An animated link component with customizable styles and content.
- Easy to integrate into existing React projects.
- Fully typed with TypeScript for better developer experience.

## Installation

You can install the package via npm or yarn:

### npm

```bash
npm install nexusfooter

import React from "react";
import MainFooter from "nexusfooter"; // Import the MainFooter component

const footerData = {
  links: [
    { text: "Home", href: "/", target: "_self", title: "Home" },
    { text: "Blog", href: "/blog", target: "_self", title: "Blog" },
  ],
  copyright: "© 2024 MyCompany. All rights reserved.",
  socialLinks: [
    { icon: "facebook", href: "https://facebook.com" },
    { icon: "twitter", href: "https://twitter.com" },
  ],
};

function App() {
  return (
    <div className="App">
      {/* Other components and content */}

      <MainFooter
        boxCount={3}
        list={footerData}
        position={[0, 1, 2]}
      />
    </div>
  );
}

export default App;
```
