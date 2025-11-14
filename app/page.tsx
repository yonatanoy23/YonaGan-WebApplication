import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div>
        <h2>Welcome to the Product Jam Starter Kit</h2>
        <p>
          Feel free to look around, edit the source code and navigate to the
          demos.
        </p>

        <Image
          src="/huji.svg"
          alt="HUJI Logo"
          width="80"
          height="80"
          priority
        />
        <Image
          src="/bezalel.svg"
          alt="Bezalel Logo"
          className="item"
          width="80"
          height="80"
          priority
        />
        <div>
          <h2>Lorem Ipsum</h2>
          
          <ul>
            <li>
              Aliquam maximus tellus sed lacus venenatis, ac cursus eros mollis.
            </li>
            <li>In id ante sed sem pharetra molestie et vitae arcu.</li>
            <li>Cras pharetra turpis at pretium elementum.</li>
            <li>Donec ultrices felis vel lectus auctor iaculis.</li>
          </ul>
        </div>
        <div>
          <Link href="/duogami">DuoGami Page</Link>
        </div>
        <div>
          <Link href="/tic-tac-toe">Tic Tac Toe</Link>
        </div>
        <div>
          <Link href="/art">Art Gallery</Link> 
        </div>

</div>
    </main>
  );
}
