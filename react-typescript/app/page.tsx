import Image from "next/image";

export default function Home() {
  return (
    <div> 
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Team</a>
          </li>
        </ul>
      </nav>
      <div>
      <h1>Welcome to My Next.js App</h1>
      <p>This is a simple Next.js app.</p>
      </div>
    </div>
  );
}