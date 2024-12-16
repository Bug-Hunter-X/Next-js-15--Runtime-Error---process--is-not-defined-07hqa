```javascript
// pages/aboutSolution.js
import { useRouter } from 'next/router';

export default function About() {
  const router = useRouter();
  // Accessing environment variables that start with NEXT_PUBLIC_
  console.log(process.env.NEXT_PUBLIC_MY_VARIABLE);

  //Solution 2: conditional rendering to avoid browser execution
  if (typeof window !== 'undefined') {
    console.log(process.env.NEXT_PUBLIC_MY_VARIABLE);
  } else {
    console.log("This code only runs on the server");
  }

  return (
    <div>
      <h1>About Page</h1>
    </div>
  );
}
```